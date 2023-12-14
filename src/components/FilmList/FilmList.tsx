import {MovieInfo} from '@utils/MovieInfo';
import {FilmCard} from '@utils/components/FilmCard/FilmCard';
import {useState} from 'react';

export type FilmListProps = {
  films: MovieInfo[];
}

export function FilmList(props: FilmListProps){
  const {films} = props;
  const [, setActiveMovie] = useState<MovieInfo>();
  return (
    <div className="catalog__films-list">
      {films.map((elem) => (
        <FilmCard
          key={elem.id}
          id={elem.id}
          title={elem.title}
          iconName={elem.iconName}
          playerLink={elem.playerLink}
          setActive={() => setActiveMovie(elem)}
        />
      ))}
    </div>
  );
}
