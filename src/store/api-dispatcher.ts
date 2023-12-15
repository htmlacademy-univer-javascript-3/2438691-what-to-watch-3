import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {loadFilms, requireAuthorization, setFilmsLoading} from '@utils/store/action.ts';
import {MovieInfo} from '@utils/types/movie-info.ts';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';
import {UserData} from "@utils/types/user-data.ts";
import {AuthData} from "@utils/types/auth-data.ts";

const loginPath = '/login';
export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoading(true));
    const {data} = await api.get<MovieInfo[]>('/films');
    dispatch(setFilmsLoading(false));
    dispatch(loadFilms(data));
  },
);

export const fetchAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(loginPath);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {

    try {
      await api.post<UserData>(loginPath, {email, password});
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);


