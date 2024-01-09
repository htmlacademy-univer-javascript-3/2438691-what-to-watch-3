import {Genre} from '../types/genre.ts';
import {MovieShortInfo} from '@utils/types/movie-short-info.ts';

export const getFilmsByGenre = (films: MovieShortInfo[], genre: Genre) : MovieShortInfo[]=> {
  if (genre === 'All genres') {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
