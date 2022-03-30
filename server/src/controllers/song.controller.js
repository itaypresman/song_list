const SongService = require('../services/song.service.js');


class TaskController {
    async upload(req, res, next) {
        try {

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
