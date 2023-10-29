import {MovieInfo} from '@utils/MovieInfo';
import {Link} from 'react-router-dom';
import {Routes} from '@utils/Routes';

export type FilmCardProps = Omit<MovieInfo, 'genre' | 'year' | 'playerLink' > & {setActive: () => void}
export function FilmCard(props: FilmCardProps){

  return(
    <article className="small-film-card catalog__films-card" onMouseOver={props.setActive}>
      <div className="small-film-card__image">
        <img src={`../../markup/img/${props.iconName}.jpg`}
          alt={props.title} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${Routes.Films}/${props.id}`} className="small-film-card__link">
          {props.title}
        </Link>
      </h3>
    </article>
  );
}
