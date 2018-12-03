import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContent = styled.main`
  display: flex;
  max-width: 100%;
  position: relative;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  z-index: 3;
`

const MajorH2 = styled.h2`
  border-bottom: 1px solid #fff;
  margin: 0 0 2rem;
  padding-bottom: .5rem;
  width: max-content;
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .5rem;
`

const SocialIconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin: 1em;
`

const SocialIcon = styled.li`
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1.2em;
`

const Icon = styled.i`
  color: #fff;
  position: absolute;
  top: 21px;
  left: 21px;
  transition: all 265ms ease-out;
`

const IconLink = styled.a`
  display: inline-block;
  ::before {
    transform: scale(1);
    content: " ";
    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: block;
    background: linear-gradient(45deg, #61dafb, #434343);
    transition: all 265ms ease-out;
  };
  :hover:before {
    transform: scale(0);
    transition: all 265ms ease-in;
  };
  :hover i {
    transform: scale(2.2);
    color: #61dafb;
    background: none;
    transition: all 265ms ease-in;
  };
`

const Close = styled.div`
  cursor: pointer;
  display: block;
  height: 4rem;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-indent: 4rem;
  top: 0;
  white-space: nowrap;
  width: 4rem;
  ::before {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    border-radius: 100%;
    content: "";
    display: block;
    height: 2.5rem;
    left: .75rem;
    position: absolute;
    top: .75rem;
    transition: background-color .2s ease-in-out;
    width: 2.5rem;
  }
`

const Article = styled.article`
  opacity: 1;
  transform: translateY(0);
`

class Contact extends React.Component {
  state = {}
  render() {
    return (<Article>
      <MainContent>
        <MajorH2>Contact</MajorH2>
        <p>Let's make something together!</p>
        <SocialIconsContainer>
          <SocialIcon><IconLink href="https://www.linkedin.com/in/lwilsonsmith/"><Icon className="fa fa-linkedin" /></IconLink></SocialIcon>
          <SocialIcon><IconLink href="https://github.com/Fprince333"><Icon className="fa fa-github" /></IconLink></SocialIcon>
          <SocialIcon><IconLink href="https://twitter.com/lwilsonsmith"><Icon className="fa fa-twitter" /></IconLink></SocialIcon>
          <SocialIcon><IconLink href="https://www.instagram.com/lwilsonsmith/"><Icon className="fa fa-instagram" /></IconLink></SocialIcon>
        </SocialIconsContainer>
        <Link to="/"><Close /></Link>
      </MainContent>
    </Article>);
  }
}

export default Contact;
