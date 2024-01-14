import {Link} from 'react-router-dom';

export function UnauthorizedUser() {
  return(
    <ul className="user-block">
      <li className="user-block__item">
        <Link to='/login' className="user-block__link">Sign in</Link>
      </li>
    </ul>
  );
}
