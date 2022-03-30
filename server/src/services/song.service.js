const { Song } = require('../utils/db');
const SongDto = require('../dtos/song.dto.js');


class SongService {
    async getAllSongsForFront() {
        const songs = [];
        const raw_songs = await Song.findAll({});

        for (const i in raw_songs) {
            const song = new SongDto(raw_songs[i].toJSON());
            songs.push(song);
        }

        return songs;
    }
}


module.exports = new SongService();
