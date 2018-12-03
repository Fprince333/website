import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import intro from '../images/intro.jpg';

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

const Article = styled.article`
  opacity: 1;
  transform: translateY(0);
`

class Intro extends React.Component {
  state = {  }
  render() {
    return (<Article>
      <MainContent>
        <MajorH2>Intro</MajorH2>
        <ImageSpan><Image src={intro} alt="" /></ImageSpan>
        <p>Born and raised on the Upper West Side of Manhattan, I knew from a very early age that my career would involve technology and the internet. After graduating with a bachelor’s degree from Kenyon College in 2009, I embarked on my first attempt at the world of the web. Since then I have gone from being just a “user” to a professional developer in a short number of years.</p>
        <p>Working with various clients and startups in all types of settings, I have been able to build my portfolio, sharpen my skillset and broaden my fundamental knowledge of all things digital.</p>
        <Link to="/"><Close /></Link>
      </MainContent>
    </Article>);
  }
}

export default Intro;
