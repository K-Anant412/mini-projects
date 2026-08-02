import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const songService = {
    getSongs: () => API.get('/songs'),
    toggleFavorite: (songId) => API.put(`/songs/${songId}/favorite`),
    getStreamUrl: (songId) => `http://localhost:5000/api/stream/${songId}`
};

export const playlistService = {
    getPlaylists: () => API.get('/show_playlists'),
    createPlaylist: (playlistData) => API.post('/playlist', playlistData),
    addSongToPlaylist: (playlistId, songId) => 
        API.post(`/playlists/${playlistId}/songs`, { song_id: songId })
};