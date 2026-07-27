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