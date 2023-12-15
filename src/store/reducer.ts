import {Films} from '../mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, resetMoviesCount, showMoreAction, takeFilms} from './action.ts';
import {Genre} from '@utils/types/genre.ts';

const initialState = {
  genre: Genre.AllGenres,
  listFilms: Films,
  countFilms: 8,
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
    });


});
export {reducer};
