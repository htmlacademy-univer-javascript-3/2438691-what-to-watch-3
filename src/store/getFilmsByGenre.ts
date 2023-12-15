import {Genre} from '../types/genre.ts';
import {MovieInfo} from '@utils/types/movie-info.ts';

export const getFilmsByGenre = (films: MovieInfo[], genre: Genre) : MovieInfo[]=> {
  if (genre === 'All genres') {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
