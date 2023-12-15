import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {promoFilmProps} from '@utils/pages/MainPage/PromoFilmProps.ts';
import {Provider} from 'react-redux';
import {store} from '@utils/store';
import {fetchFilmsAction} from "@utils/store/api-dispatcher.ts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const mainPageData: promoFilmProps = {
  promoFilmDate: '2014',
  promoFilmGenre: 'Drama',
  promoFilmPoster:
    <img
      src="../../markup/img/the-grand-budapest-hotel-poster.jpg"
      alt="The Grand Budapest Hotel poster"
      width="218" height="327"
    />,
  promoFilmTitle: 'The Grand Budapest Hotel',
};


store.dispatch(fetchFilmsAction());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        mainWindowData={mainPageData}
      />
    </Provider>
  </React.StrictMode>
);
