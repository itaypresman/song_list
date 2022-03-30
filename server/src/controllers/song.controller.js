const SongService = require('../services/song.service.js');
const { Song } = require('../utils/db');
const fs = require('fs');


class TaskController {
    async upload(req, res, next) {
        try {
            const file_data = req.file;

            if (file_data) {
                const text = fs.readFileSync(file_data.path, 'utf8').trim();
                const songs = SongService.buildValuesForDatabase(text);
                await Song.bulkCreate(songs);
                await SongService.removeLoadedFile(file_data.path);

                res.json({ status: 'ok' });
            } else {
                new Error('Internal server error');
            }
        } catch (e) {
            next(e);
        }
    }

    async list(req, res, next) {
        try {
            const tasks = await SongService.getAllSongsForFront();
            res.json(tasks);
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new TaskController();
