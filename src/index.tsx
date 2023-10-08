import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MainWindowProps} from './MainWindow/MainWindowProps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const mainWindowData: MainWindowProps = {
  promoFilmDate: '2014',
  promoFilmGenre: 'Drama',
  promoFilmPoster: <img src="../markup/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />,
  promoFilmTitle: 'The Grand Budapest Hotel'
};

root.render(
  <React.StrictMode>
    <App mainWindowData={mainWindowData}/>
  </React.StrictMode>
);
