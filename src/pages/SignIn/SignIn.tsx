import {Logo} from '@utils/components/logo/logo.tsx';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {loginAction} from '@utils/store/api-dispatcher.ts';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';

type State = {
  email: string;
  password: string;
};

function SignIn(){
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const [state, setState] = useState<State>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const onSubmitForm = () => {
    if (state.email.length > 0 && state.password.length > 3) {
      dispatch(
        loginAction({
          login: state.email,
          password: state.password
        })
      );
    }
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth){
      navigate('/');
    }
  }, [authStatus, navigate]);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={onSubmitForm}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={(evt) => setState({...state, email: evt.target.value})}
                value={state.email}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={(evt) => setState({...state, password: evt.target.value})}
                value={state.password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" >Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default SignIn;
