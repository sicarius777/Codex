import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({playState, setPlayState}) => {
  
    const player = useRef(null)

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <div className="video-content">
        <iframe className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xL4M7Yx0SSE?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
