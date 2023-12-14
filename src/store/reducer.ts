import {Films} from '../mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, takeFilms} from './action.ts';
import {Genre} from '@utils/types/genre.ts';

const initialState = {
  genre: Genre.AllGenres,
  listFilms: Films,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state,action) => {
      state.listFilms = action.payload;
    });


});
export {reducer};
