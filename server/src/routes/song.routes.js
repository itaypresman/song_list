const Router = require('express').Router;
const { body } = require('express-validator');
const router = new Router();


router.get('/list',
    (req, res) => console.log('List:', req.body)
);

router.post('/upload',
    (req, res) => console.log('Upload:', req.body)
);


module.exports = router;
