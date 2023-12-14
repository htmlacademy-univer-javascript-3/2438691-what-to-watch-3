import {genres} from '@utils/types/genre.ts';
import {GenreItem} from '@utils/components/genre-list/genre-item.tsx';


export function GenreList() {
  return (
    <ul className="catalog__genres-list">
      {genres.map((itemGenre) => (
        <GenreItem
          genreName={itemGenre}
          key={itemGenre}
        />))}
    </ul>
  );
}
