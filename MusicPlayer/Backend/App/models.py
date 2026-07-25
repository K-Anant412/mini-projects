from App import db
from datetime import datetime, timezone

playlist_songs = db.Table('playlist_songs',
                          db.Column('playlist_id', db.Integer, db.ForeignKey('playlist.id'), primary_key=True),
                          db.Column('song_id', db.Integer, db.ForeignKey('song.id'), primary_key=True)
                          )


class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    artist = db.Column(db.String(200), default="Unknown Artist")
    album = db.Column(db.String(200), default="Unknown Album")
    duration = db.Column(db.Integer)  # Stored in seconds (e.g., 240 for 4:00)
    file_path = db.Column(db.String(500), unique=True, nullable=False)  # Absolute path on disk
    is_favorite = db.Column(db.Boolean, default=False)
    play_count = db.Column(db.Integer, default=0)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

class Playlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    songs = db.relationship('Song', secondary=playlist_songs, lazy='subquery',
                            backref=db.backref('playlists', lazy=True))   