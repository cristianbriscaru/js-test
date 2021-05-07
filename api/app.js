
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const config = require('./app/config');
const { userRouter, authRouter } = require('./app/routes');

const app = express();

app.use(cookieParser())

app.use(cors(config.cors));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use('/users/',userRouter);
app.use('/auth/',authRouter);

module.exports = {
    app
}
