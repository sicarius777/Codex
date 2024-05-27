import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  useEffect(() => {
    if (playState && player.current) {
      // Any player-specific logic can be added here if needed
    }
  }, [playState]);

  if (!playState) {
    return null;
  }

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xL4M7Yx0SSE?si=8jy_oGQzG2xJjaeo&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
