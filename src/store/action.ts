import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre';
import {MovieInfo} from '@utils/MovieInfo.ts';

export const changeGenre = createAction<Genre>('genre/change');
export const takeFilms = createAction<MovieInfo[]>('genre/films');
