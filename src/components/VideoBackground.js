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
    background: ${props => (props.isPlaying ? 'rgba(0,0,0,.75)' : 'rgba(0,0,0,1)')};
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
    cc_load_policy: 1,
    cc_lang_pref: 'en',
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

class VideoBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      youtubeId: props.ytId,
      isPlaying: false
    }
  }

  play = event => {
    event.target.playVideo()
  }

  handlePlaying = event => {
    if (!this.state.isPlaying) {
      const scrollId = window.location.pathname.split("/")[1];
      if (scrollId.length) {
        document.getElementById(scrollId).scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    this.setState({ isPlaying: true })
  }

  getNext = () => {
    this.setState({ isPlaying: false })
    this.props.getNextVideo()
    this.setState({
      youtubeId: this.props.ytId, 
      isPlaying: true
    })
  }

  render() {
    return (
      <VideoBg isPlaying={this.state.isPlaying}>
        <VideoFg>
          <YouTube videoId={this.props.ytId} opts={videoOptions} onEnd={() => this.getNext()} onReady={this.play} onPlay={this.handlePlaying}/>
        </VideoFg>
      </VideoBg>
     );
  }
}

export default VideoBackground;
