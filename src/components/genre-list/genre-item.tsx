import {Genre} from '@utils/types/genre.ts';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {changeGenre} from '@utils/store/action.ts';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';

type GenreViewProps = {
  genreName: Genre;
}

export function GenreItem(props: GenreViewProps) {
  const {genreName} = props;
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  const changeGenreHandler = () => {
    dispatch(changeGenre(genreName));
  };
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === genreName})}
    >
      <Link to={'#'} className="catalog__genres-link" onClick={changeGenreHandler}>{genreName}</Link>
    </li>);
}
