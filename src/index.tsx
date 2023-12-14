import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MainPageProps} from '@utils/pages/MainPage/MainPageProps';
import {Films} from '@utils/mocks/films.ts';
import {Provider} from 'react-redux';
import {store} from '@utils/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const films = Films;
const mainPageData: MainPageProps = {
  promoFilmDate: '2014',
  promoFilmGenre: 'Drama',
  promoFilmPoster:
    <img
      src="../../markup/img/the-grand-budapest-hotel-poster.jpg"
      alt="The Grand Budapest Hotel poster"
      width="218" height="327"
    />,
  promoFilmTitle: 'The Grand Budapest Hotel',
  films: films
};


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        mainWindowData={mainPageData}
      />
    </Provider>
  </React.StrictMode>
);
