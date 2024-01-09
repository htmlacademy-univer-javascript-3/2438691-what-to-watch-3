import {FilmList} from '@utils/components/film-list/film-list.tsx';
import {Logo} from '@utils/components/logo/logo';
import {UserBlock} from "@utils/components/user-block/user-block.tsx";
import {useAppSelector} from "@utils/hooks/use-app-selector.ts";

function MyList(){
  const authStatus = useAppSelector(state => state.authorizationStatus);
  const favouriteFilms = useAppSelector(state => state.favouriteMovies);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock authStatus={authStatus}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favouriteFilms}/>
      </section>

      <footer className="page-footer">
        <Logo/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default MyList;
