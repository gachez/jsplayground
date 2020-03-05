import Movie from '../models/movie';
import moment from 'moment';

//Find all movies and return JSON response
export const index = (req, res, next) => {
    //find all movies and return json response
    Movie.find().exec((err, movies) => {
        res.json(
            //iterate through each movie
            {
                movies: movies.map(movie => ({
                    ...movie
                }))
            }
        )
    })
};