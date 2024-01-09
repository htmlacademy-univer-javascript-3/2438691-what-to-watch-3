import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {Provider} from 'react-redux';
import {store} from '@utils/store';
import {fetchAuthStatus, fetchFilmsAction, fetchPromoFilmAction} from '@utils/store/api-dispatcher.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmsAction());
store.dispatch(fetchAuthStatus());
store.dispatch(fetchPromoFilmAction());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
