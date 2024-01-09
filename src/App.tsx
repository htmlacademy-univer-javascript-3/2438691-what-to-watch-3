import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SignIn from './pages/SignIn/SignIn';
import MyList from './pages/MyList/MyList';
import MoviePage from './pages/MoviePage/MoviePage';
import Player from './pages/Player/Player';
import AddReview from './pages/AddReview/AddReview';
import {NotFoundPage} from './pages/NotFoundPage';
import PrivateRoute from '@utils/pages/PrivateRoute';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {Spinner} from '@utils/components/spinner/spinner.tsx';

function App() {
  const listFilms = useAppSelector((state)=>(state.listFilms));
  const isLoading = useAppSelector((state)=>(state.isLoading));
  if (isLoading) {
    return (<Spinner/>);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={
            <MainPage/>
          }
          />
          <Route path={'login'} element={<SignIn/>}/>
          <Route path={'mylist'} element={
            <PrivateRoute>
              <MyList films={listFilms}/>
            </PrivateRoute>
          }
          />
          <Route path={'films/:id'} element={
            <MoviePage/>
          }
          />
          <Route path={'films/:id/review'} element={<AddReview/>}/>
          <Route path={'player/:id'} element={<Player/>}/>
        </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
