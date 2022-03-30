const SongController = require('../controllers/song.controller.js');
const Router = require('express').Router;
const router = new Router();
const multer = require('multer');
const multer_config = require('../utils/multer.config.js');
const upload = multer(multer_config);


router.get('/list', SongController.list);
router.post('/upload', upload.single('file'), SongController.upload);


module.exports = router;
