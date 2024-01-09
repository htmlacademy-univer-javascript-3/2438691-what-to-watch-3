import {FilmList} from '@utils/components/film-list/film-list.tsx';
import {Logo} from '@utils/components/logo/logo';
import {GenreList} from '@utils/components/genre-list/genre-list.tsx';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {getFilmsByGenre} from '@utils/store/getFilmsByGenre.ts';
import {useEffect} from 'react';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {resetMoviesCount, showMoreAction} from '@utils/store/action.ts';
import {ShowMore} from '@utils/components/show-more/show-more.tsx';
import {UserBlock} from '@utils/components/user-block/user-block.tsx';
import {Link} from 'react-router-dom';
import {Routes} from '@utils/types/routes.ts';
import {addToFavourite} from '@utils/store/api-dispatcher.ts';

function MainPage() {
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const currentGenre = useAppSelector((state) => state.genre);
  const filmCount = useAppSelector((state) => state.countFilms);
  const listFilms = useAppSelector((state) => state.listFilms);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favouriteMovies = useAppSelector((state) => state.favouriteMovies);
  const user = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const handleAddToFavourite = () => {
    if (favouriteMovies.filter((x) => x.id === promoFilm?.id).length === 0 && promoFilm && user) {
      dispatch(addToFavourite({id: promoFilm.id, status: 1, user: user}));
    }
  };

  useEffect(() => () => {
    dispatch(resetMoviesCount());
  }, [dispatch]);
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.previewImage} alt={promoFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <UserBlock authStatus={authStatus}/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm?.previewImage}
                alt={promoFilm?.name}
                width="218" height="327"
              />,
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`${Routes.Player}/${promoFilm?.id}`}
                  className="btn btn--play film-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {user && <button className="btn btn--list film-card__button" type="button"
                  onClick={() => handleAddToFavourite()}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favouriteMovies.length}</span>
                </button>}

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>

          <FilmList films={getFilmsByGenre(listFilms, currentGenre).slice(0, filmCount)}/>
          {filmCount < getFilmsByGenre(listFilms, currentGenre).length &&
            (
              <ShowMore onClick={() => {
                dispatch(showMoreAction());
              }}
              />)}
        </section>

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default MainPage;
