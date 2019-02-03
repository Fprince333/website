import React from 'react';
import styled from 'styled-components';
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import { MdExpandMore } from "react-icons/md";
import VideoBackground from './VideoBackground';
import ImageBackground from './ImageBackground';
import Navbar from './Navbar';
import Top from './Top';
import Profile from './Profile';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import Contact from './Contact';

const LinkContainer = styled.div`
  height: 80px;
  width: 110px;
  display: block;
  position: absolute;
  bottom: 0px;
  right: 5%;
  background-color: #222222;
  text-align: center;
  z-index: 6;
  svg {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: #FFFFFF;
    width: 80%;
    height: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
    right: 0;
  }
`

const Video = () => {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <Top />
      <SectionLink section="profile">
        {({ onClick, isSelected }) => <LinkContainer onClick={onClick} selected={isSelected}><MdExpandMore /></LinkContainer>}
      </SectionLink>
      <VideoBackground />
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
    </ScrollingProvider>
  );
}

const Image = () => {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <ImageBackground>
        <Top />
        <SectionLink section="profile">
          {({ onClick, isSelected }) => <LinkContainer onClick={onClick} selected={isSelected}><MdExpandMore /></LinkContainer>}
        </SectionLink>
      </ImageBackground>
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
    </ScrollingProvider>
  );
}

const Desktop = () => {
  return (<React.Fragment>
    <Video />
  </React.Fragment>
  )
}

const Mobile = () => {
  return (<React.Fragment>
    <Image />
  </React.Fragment>
  )
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'mobile'
    }
  }

  handleSize() {
    if (window.innerWidth > 768) {
      this.setState({ layout: 'desktop' });
    } else {
      this.setState({ layout: 'mobile' });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.layout !== this.state.layout;
  }

  componentDidMount() {
    this.handleSize();
    window.addEventListener('resize', () => this.handleSize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleSize())
  }

  render() {
    return ( this.state.layout === 'mobile' ? <Mobile /> : <Desktop/> );
  }
}

export default Index;
