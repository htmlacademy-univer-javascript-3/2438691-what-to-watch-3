import {MovieInfo} from '@utils/types/movie-info.ts';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {VideoPlayer} from '@utils/components/VideoPlayer';

export type FilmCardProps = Omit<MovieInfo, 'genre' | 'year'> & {setActive: () => void}
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
        src={props.videoLink}
        poster={props.previewImage}
      />
      {props.name}
    </Link>
  );
}
