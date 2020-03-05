import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

//connect to mongodb
mongoose.connect('mongodb://localhost/movies');

//initialize server
const app = express();

//log outputs with morgan
app.use(morgan('combined'));
//use v1 as prefix for all API endpoints ???? LOL
app.use('/v1', router);

const server = app.listen(2000, () => {
    const {address, port} = server.address();
    console.log(`Listening at http://${address}:${port}`)
});
