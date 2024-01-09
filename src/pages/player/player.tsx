import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {ChangeEvent, useEffect, useMemo, useRef, useState} from 'react';
import {NotFoundPage} from '@utils/pages/not-found-page/not-found-page.tsx';
import {useAppDispatch} from "@utils/hooks/use-app-dispatch.ts";
import {fetchFilmAction} from "@utils/store/api-dispatcher.ts";


export function Player() {
  const {id} = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const film = useAppSelector(state => state.film);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }

  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isPlaying]);
  if (!film) {
    return <NotFoundPage/>;
  }
  const handleDurationChange = (evt: ChangeEvent<HTMLVideoElement>) => {
    const currentDuration = Math.round(evt.currentTarget.duration);
    if (currentDuration != duration) {
      setDuration(currentDuration);
    }
  };
  const handleTimeUpdate = (evt: ChangeEvent<HTMLVideoElement>) => {
    const currentTime = Math.round(evt.currentTarget.currentTime);
    setTime(currentTime);
  };
  const handleFullScreenClick = () => {
    videoRef.current?.requestFullscreen();
  };
  const timeLeft = useMemo(() => duration - time, [duration, time]);
  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.posterImage} ref={videoRef}
             muted={false} onDurationChange={handleDurationChange} onTimeUpdate={handleTimeUpdate}
      >
      </video>
      <button type="button" className="player__exit" onClick={() => navigate('/')}>Exit</button>
      <div className="player__controls">
        {videoRef.current && <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={time}
                      max={duration}
            >
            </progress>
            <div className="player__toggler" style={{ left: `${time / duration * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>
        }
        <div className="player__controls-row">
          {isPlaying ? (
            <button type="button" className="player__play" onClick={() => setIsPlaying(false)}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={() => setIsPlaying(true)}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}
          <div className="player__name">{film.name}</div>
          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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
