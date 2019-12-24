import React from 'react';
import styled from 'styled-components';
import { MdLocationOn, MdLink } from 'react-icons/md';

const Background = styled.div`
  background: #dfe6e9;
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

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 300;
  color: #0984e3;
  margin-bottom: 20px;
`

const H4 = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
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
  }
`

const ColumnLeft = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    width: 33%;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`

const ColumnRight = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    width: 66%;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Course = styled.strong`
  display: block;
  margin-bottom: 10px;
`

const Location = styled.span`
  display: block;
  color: #0984e3;
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
`

const Separator = styled.span`
  color: #BCBCBC;
  margin: 0 2.5px;
`

const Link = styled.span`
  * {
    color: #0984e3;
    text-decoration: none;
    margin: 0 2.5px;
  }
`

const Experience = () => {
  return (
    <Background>
      <Container>
        <H2>Experience</H2>
        <Title>"I think it is possible for ordinary people to choose to be extraordinary."<br/> - Elon Musk</Title>
        <Border />
        <H3>Work</H3>
        <Row>
          <ColumnLeft>
            <H4>Weber Shandwick</H4>
            <p>2019 - Present</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>Senior Technical Producer</Course>
              <span>Developed the USOC Olympians Made Here website. Managed Mars Inc. during the overhaul of the global and local websites. Updated the Weber Shandwick website with new messaging, design and creative.</span>
              <Location>
                <MdLocationOn /> New York, NY
                <Separator>|</Separator>
                <Link>
                  <MdLink/>
                  <a href="https://www.webershandwick.com/" target="_blank" rel="noopener noreferrer">https://www.webershandwick.com/</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <H4>ASI | Architectural Systems, Inc.</H4>
            <p>2017 - 2019</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>Web Developer & Marketing Producer</Course>
              <span>Created a membership promotional website for VIP clients, offering exclusive content and discount pricing on products. Managed the rebuild of the legacy e-commerce website using Wordpress, React, Node and GraphQL.</span>
              <Location>
                <MdLocationOn /> New York, NY
                <Separator>|</Separator>
                <Link>
                  <MdLink/>
                  <a href="https://www.archsystems.com" target="_blank" rel="noopener noreferrer">https://www.archsystems.com</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <H4>Crossfield Digital & FanVision Entertainment</H4>
            <p>2015 - 2017</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>Web Developer</Course>
              <span>Digital agency client experience working on a variety of projects within Crossfield, building and project managing the construction of corporate sites and IoT experiences for Nascar, US Open, and International Champions Cup properties.</span>
              <Location>
                <MdLocationOn /> New York, NY
                <Separator>|</Separator>
                <Link>
                  <MdLink />
                  <a href="https://www.crossfield.com" target="_blank" rel="noopener noreferrer">https://www.crossfield.com</a>
                </Link>
                <Separator>|</Separator>
                <Link>
                  <MdLink />
                  <a href="http://www.fanvisionentertainment.com/" target="_blank" rel="noopener noreferrer">http://www.fanvisionentertainment.com</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <H4>PrePlay, Inc.</H4>
            <p>2012 - 2015</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>Producer & Web Developer</Course>
              <span>In partnership with MLB Advanced Media, successfully launched the PrePlay 2nd screen social gaming app that allowed fans to predict every play of every game. The startup was acquired in late September, 2014 by FanVision. </span>
              <Location>
                <MdLocationOn /> New York, NY
                <Separator>|</Separator>
                <Link>
                  <MdLink />
                  <a href="https://www.sportsbusinessdaily.com/Journal/Issues/2014/09/15/Media/FanVision.aspx" target="_blank" rel="noopener noreferrer">PrePlay Acquisition</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
        <Border />
        <H3>Education</H3>
        <Row>
          <ColumnLeft>
            <H4>General Assembly</H4>
            <p>2013 - 2014</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>Front End Web Development & Web Development Immersive</Course>
              <span>Completed a part time course introducing the basics of how websites are constructed. Later that year, spent three months in the immersive course training to become a full stack developer with intermediate to advanced knowledge of HTML, CSS, JavaScript, Ruby and Ruby on Rails.</span>
              <Location>
                <MdLocationOn /> New York, NY
                <Separator>|</Separator>
                <Link>
                  <MdLink />
                  <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">https://generalassemb.ly/</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <H4>Kenyon College</H4>
            <p>2004 - 2009</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>B.A. English Literature</Course>
              <span>Graduated with a liberal arts degree from the college's most renowned department where I honed my critical and creative approach to the study of literature. </span>
              <Location>
                <MdLocationOn /> Gambier, OH
                <Separator>|</Separator>
                <Link>
                  <MdLink />
                  <a href="https://www.kenyon.edu" target="_blank" rel="noopener noreferrer">https://www.kenyon.edu</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <H4>The Collegiate School</H4>
            <p>1993 - 2004</p>
          </ColumnLeft>
          <ColumnRight>
            <p>
              <Course>Diploma</Course>
              <span>Graduated as a "Survivor" at the oldest independent school in the United States. </span>
              <Location>
                <MdLocationOn /> New York, NY
                <Separator>|</Separator>
                <Link>
                  <MdLink />
                  <a href="https://www.collegiateschool.org" target="_blank" rel="noopener noreferrer">https://www.collegiateschool.org</a>
                </Link>
              </Location>
            </p>
          </ColumnRight>
        </Row>
      </Container>
    </Background>
    );
}

export default Experience;
