import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {
  addFavouriteMovies,
  getComments,
  getFilm,
  getPromoFilm,
  getSimilarMovies,
  loadFilms,
  requireAuthorization,
  setFilmsLoading,
  setUserData
} from '@utils/store/action.ts';
import {MovieFullInfo} from '@utils/types/movie-full-info.ts';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';
import {UserData} from '@utils/types/user-data.ts';
import {AuthData} from '@utils/types/auth-data.ts';
import {MovieShortInfo} from '@utils/types/movie-short-info.ts';
import {CommentsProps} from '@utils/types/comments-props.ts';
import {PromoMovieInfo} from '@utils/types/promo-movie-info.ts';
import {PostReviewProps} from '@utils/types/post-review-props.ts';

const loginPath = '/login';
export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoading(true));
    const {data} = await api.get<MovieShortInfo[]>('/films');
    dispatch(setFilmsLoading(false));
    dispatch(loadFilms(data));
  },
);

export const fetchAuthStatus = createAsyncThunk<void, UserData | null, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (user, {dispatch, extra: api}) => {
    try {
      await api.get(loginPath, {headers: {'X-token': user?.token ?? ''}});
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<boolean, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {

    try {
      const {data} = await api.post<UserData>(loginPath, {email, password});
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      return true;
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      return false;
    }
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<MovieFullInfo>(`/films/${id}`);
    dispatch(getFilm(data));
  }
);

export const fetchSimilarMovies = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>('data/fetchSimilarMovies', async (id, {dispatch, extra: api}) => {
  const {data} = await api.get<MovieShortInfo[]>(`/films/${id}/similar`);
  dispatch(getSimilarMovies(data));
});

export const fetchCommentsMovie = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>('comments/fetchCommentsMovie', async (id, {dispatch, extra: api}) => {
  const {data} = await api.get<CommentsProps[]>(`comments/${id}`);
  dispatch(getComments(data));
});

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'films/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoMovieInfo>('promo');
    dispatch(getPromoFilm(data));
  }
);

export const addReviewAction = createAsyncThunk<CommentsProps[], PostReviewProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/review',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<CommentsProps[]>(`comments/${id}`, {comment, rating}, {});
    dispatch(getComments);
    return data;
  },
);

export const addToFavourite = createAsyncThunk<void, {id: string; status: number; user: UserData}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/favourite-status',
  async ({id, status, user}, {dispatch, extra: api}) => {
    const {data} = await api.post<MovieFullInfo>(`favorite/${id}/${status}`, {}, {headers: {'X-Token': user?.token ?? ''}});
    dispatch(addFavouriteMovies(data));
  },
);

