import {Link} from 'react-router-dom';

export function NotFoundPage(){
  return (
    <>
      <h3>Страница не найдена :(</h3>
      <br/>
      <Link to={'/'} >Вернуться к главной странице</Link>
    </>
  );
}
