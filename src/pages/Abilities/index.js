import React from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import { MdExpandMore } from "react-icons/md";
import VideoBackground from 'components/VideoBackground';
import ImageBackground from 'components/ImageBackground';
import Navbar from 'components/Navbar';
import Top from 'components/Top';
import Profile from 'components/Profile';
import Experience from 'components/Experience';
import Abilities from 'components/Abilities';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    const section = document.getElementsByClassName('home')[0]
    section.addEventListener('click', e => {
      window.history.replaceState({}, `Profile`, `/profile`)
    })
  }

  render() {
    return (<div className={this.props.className} onClick={this.props.onClick} selected={this.props.isSelected}>{this.props.children}</div> );
  }
}

const LinkContainer = styled(Link)`
  height: 80px;
  width: 110px;
  display: block;
  position: absolute;
  bottom: 0px;
  right: 5%;
  background-color: #222222;
  text-align: center;
  z-index: 6;
  cursor: pointer;
  svg {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: #FFFFFF;
    width: 80%;
    height: 100%;
  }
  @media (max-width: 767px) {
    position: sticky;
    width: 100%;
    right: 0;
  }
`

const Video = () => {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <Top />
      <SectionLink section="profile">
        {({ onClick, isSelected }) => <LinkContainer className="home" onClick={onClick} selected={isSelected}><MdExpandMore /></LinkContainer>}
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
          {({ onClick, isSelected }) => <LinkContainer className="home" onClick={onClick} selected={isSelected}><MdExpandMore /></LinkContainer>}
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
    <Helmet>
      <title>WS | Abilities</title>
      <meta name="description" content={`"If there is any one secret of success, it lies in the ability to get the other person's point of view and see things from that person's angle as well as from your own." - Henry Ford"`} />
    </Helmet>
    <Video />
  </React.Fragment>
  )
}

const Mobile = () => {
  return (<React.Fragment>
    <Helmet>
        <title>WS | Abilities</title>
        <meta name="description" content={`If there is any one secret of success, it lies in the ability to get the other person's point of view and see things from that person's angle as well as from your own." - Henry Ford"`} />
    </Helmet>
    <Image />
  </React.Fragment>
  )
}

class AbilitiesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'mobile',
      isTop: false
    }
  }

  handleSize() {
    if (window.innerWidth > 768) {
      this.setState({ layout: 'desktop' });
    } else {
      this.setState({ layout: 'mobile' });
    }
  }

  handleScroll() {
    if (window.scrollY < window.innerHeight) {
      this.setState({ isTop: true });
    } else {
      this.setState({ isTop: false });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.layout !== this.state.layout || nextState.isTop !== this.state.isTop;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isTop) {
      window.history.replaceState({}, `Home`, `/`)
    }
  }

  componentDidMount() {
    this.handleSize();
    window.addEventListener('resize', () => this.handleSize())
    window.addEventListener('scroll', () => this.handleScroll())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleSize())
    window.removeEventListener('scroll', () => this.handleScroll())
  }

  render() {
    return ( this.state.layout === 'mobile' ? <Mobile /> : <Desktop/> );
  }
}

export default AbilitiesPage;
