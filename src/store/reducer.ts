import {createReducer} from '@reduxjs/toolkit';
import {
  addFavouriteMovies,
  changeGenre, getComments, getFilm, getPromoFilm, getSimilarMovies,
  loadFilms,
  requireAuthorization,
  resetMoviesCount,
  setFilmsLoading, setUserData,
  showMoreAction,
} from './action.ts';
import {Genre} from '@utils/types/genre.ts';
import {MovieFullInfo} from '@utils/types/movie-full-info.ts';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';
import {UserData} from '@utils/types/user-data.ts';
import {MovieShortInfo} from '@utils/types/movie-short-info.ts';
import {CommentsProps} from '@utils/types/comments-props.ts';
import {PromoMovieInfo} from '@utils/types/promo-movie-info.ts';

type AppState = {
  userData: UserData | null;
  genre: Genre;
  promoFilm: PromoMovieInfo | null;
  listFilms: MovieShortInfo[];
  countFilms: number;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  film: MovieFullInfo | null;
  similarMovies: MovieShortInfo[];
  comments: CommentsProps[];
  favouriteMovies: MovieShortInfo[];
}
const initialState: AppState = {
  userData: null,
  genre: Genre.AllGenres,
  promoFilm: null,
  listFilms: [],
  countFilms: 8,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  film: null,
  similarMovies: [],
  comments: [],
  favouriteMovies: []
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(showMoreAction, (state) => {
      state.countFilms = state.countFilms + 4;
    })
    .addCase(resetMoviesCount, (state) => {
      state.countFilms = initialState.countFilms;
    })
    .addCase(loadFilms, (state, action) => {
      state.listFilms = action.payload;
    })
    .addCase(setFilmsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(getSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    })
    .addCase(getComments, (state, action)=>{
      state.comments = action.payload;
    })
    .addCase(getPromoFilm, (state, action)=>{
      state.promoFilm = action.payload;
    })
    .addCase(setUserData, (state, action)=>{
    state.userData = action.payload;
    })
    .addCase(addFavouriteMovies, (state, action)=>{
      state.favouriteMovies.push(action.payload);
    });
});

export {reducer};
