/*
Gets the movie data for the main screen. Called from the view, to the model.
*/
import getMoviesFromApiAsync from "../model/crud/getMoviesFromApiAsync";

import { CONSTANTS } from '../config/constants';

export default getMovies = async (searchString, index, genre, format, rating, year) => {

    const indexCount = CONSTANTS.LOAD_MAX;

    try {
        const movies = await getMoviesFromApiAsync(searchString, index, indexCount, genre, format, rating, year);

        if (movies)
            if (!movies.ok)
                return { error: "no connection" };

        return movies.data; Î

    } catch (error) {
        console.log('error: ' + error);
    }
}
