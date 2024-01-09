import {Link, useParams} from 'react-router-dom';
import {Routes} from '@utils/types/routes.ts';
import {Logo} from '@utils/components/logo/logo';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {fetchFilmAction, fetchSimilarMovies} from '@utils/store/api-dispatcher.ts';
import {useEffect} from 'react';
import {FilmList} from '@utils/components/film-list/film-list.tsx';
import {NotFoundPage} from '@utils/pages/not-found-page/not-found-page.tsx';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';
import {UnauthorizedUser} from '@utils/components/user-block/unauthorized-block.tsx';
import {UserAuthBlock} from '@utils/components/user-block/user-auth-block.tsx';


function MoviePage(){
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarMovies);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarMovies(id));
    }
  }, [dispatch, id]);
  if (!film || !id) {
    return (<NotFoundPage/>);
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            {authorizationStatus === AuthorizationStatus.Auth ?
              <UserAuthBlock/> :
              <UnauthorizedUser/>}
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`${Routes.Player}/${id}`}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth
                  &&
                  <Link
                    to={`${Routes.Films}/${id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage} alt={film?.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="MoviePage#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="MoviePage#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="MoviePage#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{film?.descriptionRating}</span>
                  <span className="film-rating__count">{film?.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film?.description}</p>

                <p className="film-card__director">
                  <strong>
                    Director: {film?.director}
                  </strong>
                </p>

                <p className="film-card__starring">
                  <strong>
                    Starring: {film?.starring.join(", ")}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms}/>
        </section>

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
