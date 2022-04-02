const dotenv = require('dotenv');
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./utils/db');
const ErrorMiddleware = require('./middlewares/error.middleware');
const songRoutes = require('./routes/song.routes.js');


dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/songs/', songRoutes);
app.use(ErrorMiddleware);


(async function start() {
    try {
        await sequelize.authenticate().then(() => console.log('Database connected successful'));
        app.listen(port, () => console.log(`Server listen: ${ port }`))
    } catch (e) {
        console.log(e);
    }
})();
