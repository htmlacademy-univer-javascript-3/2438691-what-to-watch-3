import MainPage from './MainWindow/MainPage';
import {AppProps} from './AppProps';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from "./SignIn/SignIn";
import MyList from "./MyList/MyList";
import MoviePage from "./MoviePage/MoviePage";
import Player from "./Player/Player";
import AddReview from "./AddReview/AddReview";

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
          <Route path={'mylist'} element={<MyList/>}/>
          <Route path={'films/:id'} element={<MoviePage/>}/>
          <Route path={'films/:id/review'} element={<AddReview/>}/>
          <Route path={'player/:id'} element={<Player/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
