import os
from datetime import datetime
from mutagen.mp3 import MP3
from mutagen.easyid3 import EasyID3
from mutagen import File as MutagenFile
from App import db
from App.models import Song

def scan_local_music_folder(folder_path):
    if not os.path.exists(folder_path):
        return False
    
    supported_extensions = ('.mp3',)
    songs_added = 0
    
    for file_name in os.listdir(folder_path):
        if file_name.lower().endswith(supported_extensions):
            file_path = os.path.abspath(os.path.join(folder_path, file_name))
            
            existing_song = Song.query.filter_by(file_path=file_path).first()
            if existing_song:
                continue
            
            # Default fallbacks if tags are missing
            title = os.path.splitext(file_name)[0]
            artist = 'Unknown Artist'
            album = 'Unknown Album'
            duration = 180
            
            try:
                try:
                    audio = MP3(file_path, ID3=EasyID3)
                    title = audio.get('title', [title])[0] or title
                    artist = audio.get('artist', [artist])[0] or artist
                    album = audio.get('album', [album])[0] or album
                    duration = int(audio.info.length)
                except Exception:
                    audio = MutagenFile(file_path)
                    if audio is not None and audio.info:
                        duration = int(audio.info.length)
                        if hasattr(audio, 'tags') and audio.tags:
                            title = audio.tags.get('title', [title])[0] or title
                            artist = audio.tags.get('artist', [artist])[0] or artist
                            album = audio.tags.get('album', [album])[0] or album

                new_song = Song(
                    title=str(title).strip(),
                    artist=str(artist).strip(),
                    album=str(album).strip(),
                    duration=duration,
                    file_path=file_path,
                    is_favorite=False
                )
                
                db.session.add(new_song)
                songs_added += 1
                print(f"Staged: {title}")
                
            except Exception as e:
                print(f"Skipping damaged file {file_name}: {str(e)}")

    if songs_added > 0:
        try:
            db.session.commit()
            print(f"Successfully committed {songs_added} songs.")
        except Exception as e:
            db.session.rollback()
            print(f"Database commit failed: {e}")
            return False
    else:
        print("No new songs found.")
        
    return True