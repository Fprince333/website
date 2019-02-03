import React from 'react';
import styled from 'styled-components';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';

const Background = styled.div`
  background: white;
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

const Column = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  min-height: 30px;
  padding: 3px 0px;
`

const AbilityTitle = styled.span`
  display: inline-block;
  width: 60%;
`

const AbilityScore = styled.span`
  color: #0984e3;
  float: right;
`

const Abilities = () => {
  return (
    <Background>
      <Container>
        <H2>Abilities</H2>
        <Title>"If there is any one secret of success, it lies in the ability to get the other person's point of view and see things from that person's angle as well as from your own." <br/> - Henry Ford</Title>
        <Border />
        <H3>Skills</H3>
        <Row>
          <Column>
            <UL>
              <Li>
                <AbilityTitle>HTML</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>HTML Email Templates</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>CSS</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>JavaScript</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>React.js</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
            </UL>
          </Column>
          <Column>
            <UL>
              <Li>
                <AbilityTitle>Wordpress</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>AWS</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Node.js</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Ruby on Rails</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Angular.js</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
            </UL>
          </Column>
        </Row>
        <Border />
        <H3>Tools</H3>
        <Row>
          <Column>
            <UL>
              <Li>
                <AbilityTitle>Google Chrome</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Adobe Creative Suite</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>MS Office</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>VS Code</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Basecamp | Asana | Jira</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                </AbilityScore>
              </Li>
            </UL>
          </Column>
          <Column>
            <UL>
              <Li>
                <AbilityTitle>Hyper</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Heroku</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Salesforce</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Pardot | MailChimp</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
              <Li>
                <AbilityTitle>Invision</AbilityTitle>
                <AbilityScore>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                  <MdStarBorder />
                </AbilityScore>
              </Li>
            </UL>
          </Column>
        </Row>
      </Container>
    </Background>
  );
}

export default Abilities;
