import {useParams} from 'react-router-dom';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {useEffect} from 'react';
import {fetchFilmAction} from '@utils/store/api-dispatcher.ts';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {NotFoundPage} from '@utils/pages/NotFoundPage.tsx';


export function Player(){
  const {id} = useParams();
  const film = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [dispatch, id]);
  if (!film || !id){
    return <NotFoundPage/>;
  }
  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
