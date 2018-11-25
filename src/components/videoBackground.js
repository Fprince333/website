import React from 'react';
import styled from 'styled-components';

const AppVideoContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`

const AppVideo = styled.video`
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
  z-index: 1;
  @media screen and (max-aspect-ratio: 1920/1080) {
		height: 100%;
  }
  @media screen and (min-aspect-ratio: 1920/1080) {
    width: 100%;
  }
`

const VideoBackground = ({videoSrc}) => {

  return (
    <AppVideoContainer>
      <AppVideo
        autoPlay
        loop
        muted
        src={videoSrc}>
      </AppVideo>
    </AppVideoContainer>
  );
}

export default VideoBackground;
