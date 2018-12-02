import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const VideoBg = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -99;
  ::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,.75);
  }
`

const VideoFg = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 300%;
  height: 100%;
  pointer-events: none;
`

const videoOptions = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    mute: 1,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

class VideoBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      youtubeIds: [
        'ktSdle1Mwdg',
        'gnNsuErvvJM',
        'D_3xCnDxxU8',
        'ClASuxd8jQY',
        'UK32KG5EcbA',
      ]
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.isPlaying ? false : true;
  }

  replay = event => {
    event.target.playVideo()
  }

  isPlayingCheck = event => {
    if (event.target.getPlayerState() > 0) {
      this.setState({isPlaying: true})
    }
  }

  render() {
    const youtubeId = this.state.youtubeIds[Math.floor(Math.random() * this.state.youtubeIds.length)]
    return (
      <VideoBg>
        <VideoFg>
          <YouTube videoId={youtubeId} opts={videoOptions} onEnd={this.replay} onStateChange={this.isPlayingCheck} />
        </VideoFg>
      </VideoBg>
     );
  }
}

export default VideoBackground;
