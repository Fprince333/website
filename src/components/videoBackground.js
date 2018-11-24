import React from 'react';
import './videoBackground.css';

const VideoBackground = ({videoSrc}) => {

  return (
    <div className="App-video">
      <video
        autoPlay
        loop
        muted
        src={videoSrc}>
      </video>
    </div>
  );
}

export default VideoBackground;
