import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {VideoPlayer} from '@utils/components/video-player/video-player.tsx';
import {MovieShortInfo} from '@utils/types/movie-short-info.ts';

export type FilmCardProps = MovieShortInfo & {setActive: () => void}
const SECOND = 1000;
export function FilmCard(props: FilmCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [needToActiveVideo, setNeedToActiveVideo] = useState(false);

  useEffect(() => {
    if (needToActiveVideo) {
      const timeout = setTimeout(() => setIsPlaying(true), SECOND);
      return () => clearTimeout(timeout);
    }
  }, [needToActiveVideo, setIsPlaying]);
  return(
    <Link
      className="small-film-card__link small-film-card catalog__films-card"
      to={`/films/${props.id}`}
      onMouseOver={() => {
        props.setActive();
        setNeedToActiveVideo(true);
      }}
      onMouseOut={() => {
        setNeedToActiveVideo(false);
        setIsPlaying(false);
      }}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        isMuted
        src={props.previewVideoLink}
        poster={props.previewImage}
      />
      {props.name}
    </Link>
  );
}
