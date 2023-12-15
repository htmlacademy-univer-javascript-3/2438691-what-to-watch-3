import {promoFilmProps} from './PromoFilmProps.ts';
import {FilmList} from '@utils/components/FilmList/FilmList';
import {Logo} from '@utils/components/logo/logo';
import {GenreList} from '@utils/components/genre-list/genre-list.tsx';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {getFilmsByGenre} from '@utils/store/getFilmsByGenre.ts';
import {useEffect} from 'react';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {resetMoviesCount, showMoreAction} from '@utils/store/action.ts';
import {ShowMore} from '@utils/components/show-more/show-more.tsx';

function MainPage(props: promoFilmProps) {
  const {
    promoFilmTitle,
    promoFilmDate,
    promoFilmGenre,
    promoFilmPoster
  } = props;

  const currentGenre = useAppSelector((state) => state.genre);
  const filmCount = useAppSelector((state)=>(state.countFilms));
  const listFilms = useAppSelector((state)=>(state.listFilms));
  const dispatch = useAppDispatch();
  useEffect(() => () => {
    dispatch(resetMoviesCount());
  }, [dispatch]);
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="../../../markup/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="../../../markup/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              {promoFilmPoster}
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default MainPage;
