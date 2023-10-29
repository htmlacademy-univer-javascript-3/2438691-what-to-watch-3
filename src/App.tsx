import {AppProps} from './AppProps';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SignIn from './pages/SignIn/SignIn';
import MyList from './pages/MyList/MyList';
import MoviePage from './pages/MoviePage/MoviePage';
import Player from './pages/Player/Player';
import AddReview from './pages/AddReview/AddReview';
import {NotFoundPage} from './pages/NotFoundPage';
import PrivateRoute from '@utils/pages/PrivateRoute';

function App(props: AppProps) {
  const {mainWindowData} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={
            <MainPage
              promoFilmTitle={mainWindowData.promoFilmTitle}
              promoFilmDate={mainWindowData.promoFilmDate}
              promoFilmGenre={mainWindowData.promoFilmGenre}
              promoFilmPoster={mainWindowData.promoFilmPoster}
              films={mainWindowData.films}
            />
          }
          />
          <Route path={'login'} element={<SignIn/>}/>
          <Route path={'mylist'} element={
            <PrivateRoute>
              <MyList films={mainWindowData.films}/>
            </PrivateRoute>
          }
          />
          <Route path={'films/:id'} element={
            <MoviePage
              film={mainWindowData.films[0]}
            />
          }
          />
          <Route path={'films/:id/review'} element={<AddReview film={mainWindowData.films[0]}/>}/>
          <Route path={'player/:id'} element={<Player playerLink={mainWindowData.films[0].playerLink}/>}/>
        </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
