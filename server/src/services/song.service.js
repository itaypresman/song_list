const { Song } = require('../utils/db');
const SongDto = require('../dtos/song.dto.js');
const fs = require('fs');


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

    buildValuesForDatabase(text) {
        const lines = text.replace('\r','').split('\n');
        const songs = [];

        for (const i in lines) {
            if (!~~i) {
                continue;
            }

            const raw_values = lines[i].split(',');
            const values = raw_values.map(val => val.trim());
            const song = { name: values[0], band: values[1],  year: values[2], };

            songs.push(song);
        }

        return songs;
    }

    async removeLoadedFile(file_path) {
        await fs.unlink(file_path, (err) => {
            if (err) {
                new Error(err.message);
            }
        });

    }
}


module.exports = new SongService();
