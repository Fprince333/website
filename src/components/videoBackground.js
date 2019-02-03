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

let youtubeIds = [
  'ktSdle1Mwdg',
  'gnNsuErvvJM',
  'D_3xCnDxxU8',
  'ClASuxd8jQY',
  'UK32KG5EcbA',
]

class VideoBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playedVideoIds: [],
      youtubeId: youtubeIds[Math.floor(Math.random() * youtubeIds.length)],
      isPlaying: false
    }
  }

  replay = event => {
    this.setState({ youtubeId: youtubeIds[Math.floor(Math.random() * youtubeIds.length)] })
    youtubeIds = youtubeIds.filter(id => {
      return id !== this.state.youtubeId;
    });
  }

  play = event => {
    event.target.playVideo()
  }

  handlePlaying = event => {
    if (!this.state.isPlaying) {
      this.setState({ isPlaying: true })
      const scrollId = window.location.pathname.split("/")[1];
      if (scrollId.length) {
        document.getElementById(scrollId).scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      youtubeIds = youtubeIds.filter(id => {
        return id !== this.state.youtubeId;
      });
    }
  }

  render() {
    const youtubeId = this.state.youtubeId;
    return (
      <VideoBg>
        <VideoFg>
          <YouTube videoId={youtubeId} opts={videoOptions} onEnd={this.replay} onReady={this.play} onPlay={this.handlePlaying} />
        </VideoFg>
      </VideoBg>
     );
  }
}

export default VideoBackground;
