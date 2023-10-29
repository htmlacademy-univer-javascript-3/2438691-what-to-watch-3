import {MovieInfo} from '@utils/MovieInfo';

export type MainPageProps =
  {
    promoFilmTitle: string;
    promoFilmDate: string;
    promoFilmGenre: string;
    promoFilmPoster: JSX.Element;
    films: MovieInfo[];
  }
