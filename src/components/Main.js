import React from 'react';
import styled from 'styled-components';
import intro from '../images/intro.jpg';
import work from '../images/work.jpg';
import about from '../images/about.jpg';
import logo from '../logo.svg';

const MainContent = styled.main`
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

const ImageSpan = styled.span`
  display: block;
  margin: 2.5rem 0;
  width: 100%;
  border: 0;
  border-radius: 4px;
  position: relative;
  ::before {
    border-radius: 4px;
    display: block;
    background-color: rgba(19,21,25,.5);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAFVBMV…9f92n//nWf9u9f92n//nWf9u9f92n//nWf9u9f9/z/1/4AuzlkoYASx08AAAAASUVORK5CYII=);
    content: "";
    height: 100%;
    left: 0;
    opacity: .5;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  display: block;
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

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WorkList = styled.ol`
  margin-left: 0;
  list-style: none;
  counter-reset: counter;
`

const WorkPlace = styled.li`
  ::before {
    position: relative;
    display: inline-block;
    z-index: 100;
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    border: 3px solid #61dafb;
    line-height: 1.5rem;
    text-align: center;
    color: #61dafb;
    background-color: white;
    border-radius: 100em;
    counter-increment: counter;
    content: counter(counter);
  ::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 90;
    left: 0.75rem;
    margin-left: 1.5px;
    border-left: 3px solid #61dafb;
    content: "";
  }
  };
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

class Main extends React.Component {
  render() {

    const Article = styled.article`
      opacity: ${this.props.articleTimeout ? '1' : '0'};
      transform: ${this.props.articleTimeout ? 'translateY(0)' : 'translateY(.25rem)'};
    `

    const IntroArticle = styled(Article)`
      display: ${this.props.article === 'intro' ? 'block' : 'none'};
    `

    const WorkArticle = styled(Article)`
      display: ${this.props.article === 'work' ? 'block' : 'none'};
    `

    const AboutArticle = styled(Article)`
      display: ${this.props.article === 'about' ? 'block' : 'none'};
    `

    const ContactArticle = styled(Article)`
      display: ${this.props.article === 'contact' ? 'block' : 'none'};
    `

    return (
      <MainContent style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <IntroArticle>
          <MajorH2>Intro</MajorH2>
          <ImageSpan><Image src={intro} alt="" /></ImageSpan>
          <p>Born and raised on the Upper West Side of Manhattan, I knew from a very early age that my career would involve technology and the internet. After graduating with a bachelor’s degree from Kenyon College in 2009, I embarked on my first attempt at the world of the web. Since then I have gone from being just a “user” to a professional developer in a short number of years.</p>
          <p>Working with various clients and startups in all types of settings, I have been able to build my portfolio, sharpen my skillset and broaden my fundamental knowledge of all things digital.</p>
          <Close onClick={() => { this.props.onCloseArticle() }}/>
        </IntroArticle>

        <WorkArticle>
          <MajorH2>Work</MajorH2>
          <ImageSpan><Image src={work} alt="" /></ImageSpan>
          <WorkContainer>
            <WorkList>
              <WorkPlace>Architectural Systems (2017)</WorkPlace>
              <WorkPlace>FanVision Entertainment (2016)</WorkPlace>
              <WorkPlace>Crossfield Digital (2015)</WorkPlace>
              <WorkPlace>PrePlay (2012)</WorkPlace>
              <WorkPlace>The Wall Street Journal (2010)</WorkPlace>
            </WorkList>
          </WorkContainer>
          <Close onClick={() => { this.props.onCloseArticle() }}/>
        </WorkArticle>

        <AboutArticle>
          <MajorH2>About</MajorH2>
          <ImageSpan><Image src={about} alt="" /></ImageSpan>
          <p>I specialize in designing and developing user interfaces and digital products. I don’t restrict myself to development. During my career, I have taught myself to code in both front and back-end languages. I know the possibilities and restrictions of user interfaces and I know how to operate in teams.</p>
          <p>The blend of design, marketing, development and business is where I feel I excel and can provide value for you. I am a strong individual with a love for side-projects which enhance people’s personal & professional goals.</p>
          <Close onClick={() => { this.props.onCloseArticle() }}/>
        </AboutArticle>

        <ContactArticle>
          <MajorH2>Contact</MajorH2>
          <p>Let's make something together!</p>
          <SocialIconsContainer>
            <SocialIcon><IconLink href="https://www.linkedin.com/in/lwilsonsmith/"><Icon className="fa fa-linkedin" /></IconLink></SocialIcon>
            <SocialIcon><IconLink href="https://github.com/Fprince333"><Icon className="fa fa-github" /></IconLink></SocialIcon>
            <SocialIcon><IconLink href="https://twitter.com/lwilsonsmith"><Icon className="fa fa-twitter"/></IconLink></SocialIcon>
            <SocialIcon><IconLink href="https://www.instagram.com/lwilsonsmith/"><Icon className="fa fa-instagram"/></IconLink></SocialIcon>
          </SocialIconsContainer>
          <Close onClick={() => { this.props.onCloseArticle() }}/>
        </ContactArticle>

      </MainContent>
    )
  }
}

export default Main
