import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre';
import {MovieInfo} from '@utils/types/movie-info.ts';
import {AuthorizationStatus} from "@utils/types/authorization-status.ts";

export const changeGenre = createAction<Genre>('genre/change');
export const takeFilms = createAction<MovieInfo[]>('genre/films');

export const showMoreAction = createAction('more/films');
export const resetMoviesCount = createAction('hide/films');
export const loadFilms = createAction<MovieInfo[]>('load/films');
export const setFilmsLoading = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const login = createAction('user/login');
