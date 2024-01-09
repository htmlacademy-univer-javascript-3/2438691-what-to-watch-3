import {MovieShortInfo} from '@utils/types/movie-short-info.ts';

export type PromoMovieInfo = MovieShortInfo & {
  released: number;
  isFavorite: boolean;
}
