import React from 'react';
import { ScrollingProvider, Section, SectionLink } from "react-scroll-section";
import { MdExpandMore } from "react-icons/md";
import ImageBackground from './ImageBackground';
import Headline from './Headline';
import Navbar from './Navbar';
import Link from './Link';
import Profile from './Profile';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import Contact from './Contact';


const Image = () => {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <ImageBackground>
        <Headline />
        <SectionLink section="profile">
          {({ onClick, isSelected }) => <Link className="home" onClick={onClick} selected={isSelected}><MdExpandMore /></Link>}
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

export default Image;