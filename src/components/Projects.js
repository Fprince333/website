import React from 'react';
import styled from 'styled-components';
import { MdOpenInNew } from 'react-icons/md';
import asi from '../images/asi.jpg';
import icons from '../images/icons.jpg';
import isbi from '../images/isbi.jpg';
import levine from '../images/levine.jpg';

const Background = styled.div`
  background: #F3EFE0;
`

const Container = styled.div`
  max-width: 1280px;
  padding: 40px 180px;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 60px 20px;
    min-width: 280px;
  }
`

const H2 = styled.h2`
  font-size: 55px;
  text-align: center;
  color: #0984e3;
  margin-bottom: 20px;
`

const Title = styled.p`
  color: #727878;
  text-align: center;
  font-size: 21px;
  margin-bottom: 20px;
  font-weight: 300;
  line-height: 1.4;
`

const Border = styled.hr`
  margin: 40px 0px;
  border-color: #727878;
  opacity: 0.2;
  border-top: 1px solid #eee;
`

const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const Column = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  background: #0984e3;
  color: white;
  margin: 0;
  &:hover img {
    opacity: 0.2;
    transform: translate3d(0,0,0);
  }
`

const Figcaption = styled.figcaption`
  padding: 20px 30px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  &:hover {
    h3 {
      opacity: 1;
      &::after {
        transform: translate3d(0,0,0);
      }
    }
    p {
      opacity: 1;
      transform: translate3d(0,0,0);
      margin: 0;
    }
    @media (max-width: 767px) {
      h3 {
        font-size: 17px;
        padding-bottom: 5px;
      }
      p {
        font-size: 14px;
        padding-top: 0px;
      }
    }
  }
  h3 {
    position: relative;
    overflow: hidden;
    padding-bottom: 20px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 5px;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
      content: '';
      transition: transform 0.35s;
      transform: translate3d(-100%,0,0);
    }
  }
  p {
    padding-top: 10px;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(100%,0,0);
    strong {
      width: 60px;
      display: inline-block;
      margin: 0px;
    }
  }
  a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
  span.icon {
    display: flex;
    align-items: center;
    background: #0984e3;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 48px;
    height: 48px;
    svg {
      margin: 0 auto;
      width: 50%;
      height: 50%;
    }
  }
`

const Poster = styled.img`
  display: flex;
  width: 104%;
  transform: translate3d(-10px,0,0);
  transition: opacity 0.35s, transform 0.35s;
  backface-visibility: hidden;
`

const Projects = () => {
  return (
    <Background>
      <Container>
        <H2>Projects</H2>
        <Title>"My job is to pull things together from different parts of the company and clear the ways and get the resources for the key projects. And to take these great people we have and to push them and make them even better, coming up with more aggressive visions of how it could be." <br /> - Steve Jobs</Title>
        <Border />
        <Row>
          <Column>
            <Figure>
              <Poster src={asi} />
              <Figcaption>
                <h3>Architectural Systems, Inc.</h3>
                <p>ASI e-commerce website rebuild/redesign.</p>
                <p>
                  <strong>Tags: </strong>
                  <br/>
                  Wordpress, React.js, Salesforce, Technical Project Management
                </p>
                <a href="https://asi.netlify.com" target="_blank" rel="noopener noreferrer">View more</a>
                <span className="icon">
                  <MdOpenInNew />
                </span>
              </Figcaption>
            </Figure>
          </Column>
          <Column>
            <Figure>
              <Poster src={icons} />
              <Figcaption>
                <h3>ASI Icons Club</h3>
                <p>ASI VIP website</p>
                <p>
                  <strong>Tags: </strong>
                  <br />
                  Wordpress, React.js, Development
                </p>
                <a href="https://iconsclub.archsystems.com" target="_blank" rel="noopener noreferrer">View more</a>
                <span className="icon">
                  <MdOpenInNew />
                </span>
              </Figcaption>
            </Figure>
          </Column>
          <Column>
            <Figure>
              <Poster src={isbi} />
              <Figcaption>
                <h3>Illinois State Board of Investment</h3>
                <p>Government Website Design & Development</p>
                <p>
                  <strong>Tags: </strong>
                  <br />
                  Wordpress, Development
                </p>
                <a href="https://www.isbinvestment.com/" target="_blank" rel="noopener noreferrer">View more</a>
                <span className="icon">
                  <MdOpenInNew />
                </span>
              </Figcaption>
            </Figure>
          </Column>
          <Column>
            <Figure>
              <Poster src={levine} />
              <Figcaption>
                <h3>Marc Levine on Investing</h3>
                <p>Personal Website for Public Figure</p>
                <p>
                  <strong>Tags: </strong>
                  <br />
                  Wordpress, Development
                </p>
                <a href="https://www.levineratio.com/" target="_blank" rel="noopener noreferrer">View more</a>
                <span className="icon">
                  <MdOpenInNew />
                </span>
              </Figcaption>
            </Figure>
          </Column>
        </Row>
      </Container>
    </Background>
  );
}

export default Projects;