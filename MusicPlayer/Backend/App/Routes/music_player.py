from App.Utils.Response import error_response, success_response
from flask import request, Blueprint, send_file
from App.models import Song, Playlist
from App import db

song_route = Blueprint("songs", __name__)

@song_route.route("/songs", methods=["GET"])
def songs():
    """
    Get all songs
    ---
    tags:
        - SongList
    responses:
        200:
            description: A list of songs
    """
    try:
        raw_list = Song.query.all()
        
        if not raw_list:
            return error_response("Sorry but your directory was empty,")
    
        songs_list = []
         
        for song in raw_list:
            songs_list.append(
                {
                    "id": song.id,
                    "title": song.title,
                    "artist": song.artist,
                    "duration": song.duration,
                    "is_favorite": song.is_favorite,
                    "play_count": song.play_count
                }
            )    
            
        return success_response("Songs:", songs_list)
        
    except Exception as e:
        return error_response(str(e))

@song_route.route("/stream/<int:song_id>", methods=["GET"])
def stream_song(song_id):
    """
    Stream a specific song by ID
    ---
    tags:
        - AudioStream
    parameters:
        - name: song_id
          in: path
          type: integer
          required: true
          description: The ID of the song to stream
    produces:
        - audio/mpeg
    responses:
        200:
            description: Audio stream data
            schema:
                type: file
        404:
            description: Song not found in database or file missing on disk
        500:
            description: Internal server error
    """
    try:
        song = Song.query.get(song_id)
        
        if not song:
            return error_response("Song not found")
        
        return send_file(
            song.file_path,
            mimetype="audio/mpeg"
        )
        
    except FileNotFoundError:
        return error_response("File not found")
    except Exception as e:
        return error_response(str(e))
    
    
@song_route.route('/playlist', methods=["POST"])
def playlist():
    """
    Create a new playlist
    ---
    tags:
        - Playlists
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          properties:
            name:
              type: string
              example: "Coding Beats"
    responses:
        200:
            description: Playlist created successfully
        400:
            description: Missing playlist name
    """
    try:
        data = request.get_json() or {}
        playlist_name = data.get('name')
        
        if not playlist_name:
            return error_response("playlist not exist yet")
        
        new_playlist = Playlist(name=playlist_name)
        db.session.add(new_playlist)
        db.session.commit()
        
        return success_response(
            data={"id": new_playlist.id, "name": new_playlist.name},
            message="Playlist created successfully"
        )
    except Exception as e:
        return error_response(str(e))
    
@song_route.route('/playlists/<int:playlist_id>/songs', methods=["POST"])
def add_song_to_list(playlist_id):
    """
    Add a song to a specific playlist
    ---
    tags:
        - Playlists
    parameters:
      - name: playlist_id
        in: path
        type: integer
        required: true
      - in: body
        name: body
        required: true
        schema:
          type: object
          properties:
            song_id:
              type: integer
              example: 1
    responses:
        200:
            description: Song added to playlist successfully
        404:
            description: Playlist or Song not found
    """
    try:
        data = request.get_json()
        song_id = data.get("song_id")
        
        if not song_id:
            return error_response("song not found")
        
        playlist = Playlist.query.get(playlist_id)
        song = Song.query.get(song_id)
        
        if not playlist or not song:
            return error_response("song or playlist not found", error_code=404)
        
        if song in playlist.songs:
            return error_response("song already exist in playlist", error_code=409)
        
        playlist.songs.append(song)
        db.session.commit()
        
        return success_response(message=f"Added '{song.title}' to playlist '{playlist.name}' successfully")
    
    except Exception as e:
        return error_response(str(e))