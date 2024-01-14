import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  isNeedToActiveVideo: boolean;
  isMuted: boolean;
  src: string;
  poster: string;
}

export function VideoPlayer(props: VideoPlayerProps) {
  const { isPlaying, isNeedToActiveVideo, isMuted, src, poster } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return isNeedToActiveVideo ?
    (
      <video
        width="280"
        height="175"
        muted={isMuted}
        ref={videoRef}
        src={src}
        poster={poster}
      />
    ) :
    (<img src={poster} width="280" height="175"/>);
}
