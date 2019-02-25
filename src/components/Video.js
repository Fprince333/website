import React from 'react';
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import { MdExpandMore } from "react-icons/md";
import Top from './Top';
import VideoBackground from './VideoBackground';
import Navbar from './Navbar';
import Link from './Link';
import Profile from './Profile';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import Contact from './Contact';

const Video = () => {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <Top />
      <SectionLink section="profile">
        {({ onClick, isSelected }) => <Link className="home" onClick={onClick} selected={isSelected}><MdExpandMore /></Link>}
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

export default Video;