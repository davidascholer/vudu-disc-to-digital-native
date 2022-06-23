import client from '../api/client';
import { movieDataEndpoint } from '../api/endpoints';

const getMoviesFromApiAsync = async (searchString, index, indexCount, genre, format, rating, year) => {

  try {
    const data = client.post(movieDataEndpoint,
      {
        searchString: searchString,
        index: index,
        indexCount: indexCount,
        genre: genre,
        format: format,
        rating: rating,
        year: year
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    return data;
  } catch (err) {
    return { error: err }
  }

};

export default getMoviesFromApiAsync;