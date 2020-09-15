import React from 'react';
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import { MdExpandMore } from "react-icons/md";
import youtube from '../apis/youtube';
import Top from './Top';
import VideoBackground from './VideoBackground';
import Title from './Title';
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

class Video extends React.Component {

  nextVideo = () => {
    const updatedYoutubeIds = allYouTubeIds.filter(id => {
      return id !== this.state.ytId;
    });
    if (updatedYoutubeIds.length) {
      const updatedYouTubeId = updatedYoutubeIds[Math.floor(Math.random() * updatedYoutubeIds.length)];
      this.setState({
        ytId: updatedYouTubeId
      })
      fetchYouTubeVideoTitle(updatedYouTubeId).then(title => {
        this.setState({
          ytId: updatedYouTubeId,
          ytTitle: title
        })
      })
    } else {
      const updatedYouTubeId = allYouTubeIds[Math.floor(Math.random() * allYouTubeIds.length)];
      this.setState({
        ytId: updatedYouTubeId
      })
      fetchYouTubeVideoTitle(updatedYouTubeId).then(title => {
        this.setState({
          ytId: updatedYouTubeId,
          ytTitle: title
        })
      })
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
        <Top/>
        <SectionLink section="profile">
          {({ onClick, isSelected }) => <Link className="home" onClick={onClick} selected={isSelected}><MdExpandMore /></Link>}
        </SectionLink>
        <Title ytId={this.state.ytId} ytTitle={this.state.ytTitle}/>
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