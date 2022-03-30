const Router = require('express').Router;
const router = new Router();
const SongController = require('../controllers/song.controller.js');


router.get('/list', SongController.list);

router.post('/upload',
    (req, res) => console.log('Upload:', req.body)
);


module.exports = router;
