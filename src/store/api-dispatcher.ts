import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {loadFilms, setFilmsLoading} from '@utils/store/action.ts';
import {MovieInfo} from '@utils/types/movie-info.ts';


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
