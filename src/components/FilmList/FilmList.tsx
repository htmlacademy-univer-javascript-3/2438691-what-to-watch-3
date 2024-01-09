import {FilmCard} from '@utils/components/FilmCard/FilmCard';
import {useState} from 'react';
import {MovieShortInfo} from '@utils/types/movie-short-info.ts';

export type FilmListProps = {
  films: MovieShortInfo[];
}

export function FilmList(props: FilmListProps){
  const {films} = props;
  const [, setActiveMovie] = useState<MovieShortInfo>();
  return (
    <div className="catalog__films-list">
      {films.map((elem) => (
        <FilmCard
          key={elem.id}
          setActive={() => setActiveMovie(elem)}
          {...elem}
        />
      ))}
    </div>
  );
}
