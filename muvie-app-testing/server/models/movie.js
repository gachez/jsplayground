import mongoose, {Schema} from 'mongoose';

//Define the movie schema
const movieSchema = new Schema({
    title:{
        id: {
            type: Number,
            unique: true
        },
        type: String,
        unique: true
    },
    year: String,
    runtime: String,
    genres: Array,
    director: String,
    actors: Array,
    plot: String,
    posterUrl: String
});

//Export the model
export default mongoose.model('movie', movieSchema);