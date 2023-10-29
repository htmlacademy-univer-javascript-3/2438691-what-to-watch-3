import {Link} from 'react-router-dom';
import {MovieInfo} from '@utils/MovieInfo';
import {Routes} from '@utils/Routes';
import {InputReview} from '@utils/components/InputReviewText/InputReview';
import {Logo} from '@utils/components/logo/logo';

type AddReviewProps = {
  film: MovieInfo;
}
function AddReview(props: AddReviewProps){

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="../../../markup/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${Routes.Films}/${props.film.id}`} className="breadcrumbs__link">{props.film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={`../../../markup/img/${props.film.iconName}.jpg`} alt={props.film.title} width="218"
            height="327"
          />
        </div>
      </div>

      <InputReview/>

    </section>
  );
}
export default AddReview;
