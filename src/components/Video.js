import React from 'react';
import styled from 'styled-components';
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import { MdExpandMore } from "react-icons/md";
import { ImYoutube } from "react-icons/im";
import youtube from '../apis/youtube';
import Top from './Top';
import VideoBackground from './VideoBackground';
import Navbar from './Navbar';
import Link from './Link';
import Profile from './Profile';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import Contact from './Contact';

const allYouTubeIds = [
  'ktSdle1Mwdg',
  'gnNsuErvvJM',
  'D_3xCnDxxU8',
  'ONmgaO09OxM',
  'ClASuxd8jQY',
  'UK32KG5EcbA',
  'KjqDhz9o9yw',
  'LdwMb7ipV_I'
]

const firstYouTubeId = allYouTubeIds[Math.floor(Math.random() * allYouTubeIds.length)]

const fetchYouTubeVideoTitle = async (videoId) => {
  const response = await youtube.get('/videos', {
      params: {
          id: videoId
      }
  })
  return response.data.items[0].snippet.title;
}

const Title = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  svg {
    fill: #FF0000;
    margin-right: 10px;
  }
`

class Video extends React.Component {

  nextVideo = () => {
    const updatedYoutubeIds = allYouTubeIds.filter(id => {
      return id !== this.state.ytId;
    });
    if (updatedYoutubeIds.length) {
      this.setState({
        ytId: updatedYoutubeIds[Math.floor(Math.random() * updatedYoutubeIds.length)]
      });
    } else {
      this.setState({
        ytId: allYouTubeIds[Math.floor(Math.random() * allYouTubeIds.length)]
      });
    }
  }

  state = { 
    ytId: firstYouTubeId,
    ytTitle: ''
  }

  componentDidMount() {
    fetchYouTubeVideoTitle(firstYouTubeId).then(title => {
      this.setState({
        ytTitle: title
      })
    })
  }

  render() { 
    return ( 
      <ScrollingProvider scrollBehavior="smooth">
        <Top title={this.state.ytTitle} ytId={this.state.ytId} />
        <SectionLink section="profile">
          {({ onClick, isSelected }) => <Link className="home" onClick={onClick} selected={isSelected}><MdExpandMore /></Link>}
        </SectionLink>
        {this.state.ytTitle ? <a href={`https://www.youtube.com/watch?v=${this.state.ytId}`} target="_blank" rel="noopener noreferrer"><Title><ImYoutube /> {this.state.ytTitle.replace('HD', '')} </Title></a> : null}
        <VideoBackground ytId={this.state.ytId} getNextVideo={() => this.nextVideo()}/>
        <Navbar />
        <Section id="profile">
          <Profile />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="abilities">
          <Abilities />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </ScrollingProvider> );
  }
}
 
export default Video;