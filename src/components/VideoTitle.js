import React from 'react';
import styled from 'styled-components';
import { ImYoutube } from "react-icons/im";
import { MdOpenInNew, MdVolumeUp, MdVolumeOff, MdSkipNext } from 'react-icons/md';

const TitleContainer = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  position: absolute;
  bottom: 20px;
  left: 20px;
  .title-column {
    display: flex;
    margin-right: 10px;
    color: white;
    a {
      display: flex;
      color: white;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    svg {
      &:hover {
        cursor: pointer;
        fill: #0984e3;
      }
      &.youtube {
        fill: #FF0000;
      }
    }
  }
`

class VideoTitle extends React.Component {
  
  state = {
    isHovered: false
  }

  handlePlayClick = () => {
    this.props.togglePlay();
  }

  handlePlayNext = () => {
    this.props.playNext();
  }

  setHover = () => {
    this.setState({
      isHovered: true
    })
  }

  removeHover = () => {
    this.setState({
      isHovered: false
    })
  }

  render() { 
    return ( this.props.ytId && this.props.ytTitle.length && 
      <TitleContainer>
        <div className="title-column" onClick={() => this.handlePlayNext()}>
          <MdSkipNext/>
        </div>
        <div className="title-column" onClick={() => this.handlePlayClick()}>
          {this.props.playWithSound ? <MdVolumeOff /> : <MdVolumeUp/> }
        </div>
        <div className="title-column"
          onMouseEnter={() => this.setHover()}
          onMouseLeave={() => this.removeHover()}
          >
          {this.state.isHovered && <a href={`https://www.youtube.com/watch?v=${this.props.ytId}`} target="_blank" rel="noopener noreferrer"><MdOpenInNew className='youtube'/></a> }
          {!this.state.isHovered && <ImYoutube className='youtube' />}
        </div>
        <div className="title-column"
          onMouseEnter={() => this.setHover()}
          onMouseLeave={() => this.removeHover()}>
            {this.state.isHovered && <a href={`https://www.youtube.com/watch?v=${this.props.ytId}`} target="_blank" rel="noopener noreferrer">{this.props.ytTitle.replace('HD', '')}</a> }
            {!this.state.isHovered && this.props.ytTitle.replace('HD', '')}
        </div>
      </TitleContainer>
    );
  }
}
 
export default VideoTitle;