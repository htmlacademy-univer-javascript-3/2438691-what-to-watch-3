import MainWindow from './pages/MainWindow/MainWindow';
import {AppProps} from './AppProps';

function App(props: AppProps){
  const {mainWindowData} = props;
  return (
    <MainWindow
      promoFilmPoster={mainWindowData.promoFilmPoster}
      promoFilmGenre={mainWindowData.promoFilmGenre}
      promoFilmDate={mainWindowData.promoFilmDate}
      promoFilmTitle={mainWindowData.promoFilmTitle}
    />
  );
}

export default App;
