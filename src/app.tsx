import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '@utils/pages/main-page/main-page.tsx';
import SignIn from '@utils/pages/sign-in/sign-in.tsx';
import MyList from '@utils/pages/my-list/my-list.tsx';
import MoviePage from '@utils/pages/movie-page/movie-page.tsx';

import AddReview from '@utils/pages/add-review/add-review.tsx';
import {NotFoundPage} from './pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '@utils/private-route.tsx';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {Spinner} from '@utils/components/spinner/spinner.tsx';
import {Player} from "@utils/pages/player/player.tsx";

function App() {
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
              <MyList/>
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
