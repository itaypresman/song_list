const multer = require('multer');
const fs = require('fs');
const path = require('path');


const config = {
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            if (!fs.existsSync('./uploads')) {
                fs.mkdir('./uploads', function (err) {
                    if (err) {
                        console.log(err.stack)
                    } else {
                        callback(null, './uploads');
                    }
                });
            } else {
                callback(null, './uploads');
            }
        },
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            callback(null, name + '-' + Date.now() + ext);
        },
    }),
    fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);

        if (ext !== '.csv') {
            return callback(new Error('Only images are allowed'));
        }

        callback(null, true);
    }
};


module.exports = config;
