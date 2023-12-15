import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms, resetMoviesCount, setFilmsLoading, showMoreAction, takeFilms} from './action.ts';
import {Genre} from '@utils/types/genre.ts';
import {MovieInfo} from '@utils/types/movie-info.ts';

const initialState = {
  genre: Genre.AllGenres,
  listFilms: [] as MovieInfo[],
  countFilms: 8,
  isLoading: false,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state, action) => {
      state.listFilms = action.payload;
    }
    ).addCase(showMoreAction, (state) => {
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
    });
});

export {reducer};
