import {Genre} from '../types/genre.ts';
import {MovieShortInfo} from '@utils/types/movie-short-info.ts';

export const getFilmsByGenre = (films: MovieShortInfo[], genre: Genre) : MovieShortInfo[]=> {

  if (genre.valueOf() === Genre.AllGenres) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
