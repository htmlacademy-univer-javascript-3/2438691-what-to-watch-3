import {Logo} from '@utils/components/logo/logo.tsx';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {loginAction} from '@utils/store/api-dispatcher.ts';
import {useState} from 'react';

type State = {
  email: string;
  password: string;
};

function SignIn(){
  const dispatch = useAppDispatch();
  const [state, setState] = useState<State>({
    email: '',
    password: '',
  });
  const onSubmitForm = () => {
    if(state.email.length > 0 && state.password.length > 0) {
      dispatch(
        loginAction({
          login: state.email,
          password: state.password
        })
      );
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="SignIn#" className="sign-in__form" onSubmit={onSubmitForm}>
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
            <button className="sign-in__btn" type="submit">Sign in</button>
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
