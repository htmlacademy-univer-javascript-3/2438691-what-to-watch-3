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

function App(props: AppProps){
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
            />
          }
          />
          <Route path={'login'} element={<SignIn/>}/>
          <PrivateRoute>
            <Route path={'mylist'} element={<MyList/>}/>
          </PrivateRoute>
          <Route path={'films/:id'} element={<MoviePage/>}/>
          <Route path={'films/:id/review'} element={<AddReview/>}/>
          <Route path={'player/:id'} element={<Player/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
