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
    background-color: ${props => (props.isPlayingWithSound ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,.75)')};
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

class VideoBackground extends React.Component {
  
  state = {
    youtubeId: this.props.ytId,
    videoOptions: {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        mute: 1,
        modestbranding: 1,
        cc_load_policy: 0,
        cc_lang_pref: 'en',
        controls: 0
      }
    },
    isPlayingWithSound: this.props.playWithSound,
    isPlaying: false
  }

  videoRef = React.createRef();

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

  mute = () => {
    document.body.style.overflow = 'initial';
    this.videoRef.current.getInternalPlayer().mute()
  }

  unMute = () => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0,0);
    this.videoRef.current.getInternalPlayer().unMute()
  }

  componentDidUpdate(prevProps) {
    if (this.props.playWithSound !== prevProps.playWithSound) {
      !this.props.playWithSound && this.mute();
      this.props.playWithSound && this.unMute();
    }
  }

  render() {
    return (
      <VideoBg 
        isPlaying={this.state.isPlaying} 
        isPlayingWithSound={this.props.playWithSound}
        >
        <VideoFg>
          <YouTube 
            videoId={this.props.ytId} 
            opts={this.state.videoOptions} 
            onEnd={() => this.getNext()} 
            onReady={this.play} 
            onPlay={this.handlePlaying}
            ref={this.videoRef} 
            /> 
        </VideoFg>
      </VideoBg>
     );
  }
}

export default VideoBackground;
