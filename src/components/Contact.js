import React from 'react';
import styled from 'styled-components';
import { TiSocialLinkedin, TiSocialTwitter, TiSocialGithub, TiMail } from 'react-icons/ti';

const Background = styled.div`
  background: #2d3436;
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
  color: white;
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
  svg {
    float: left;
    margin-right: 10px;
    height: 32px;
    width: 32px;
  }
  a {
    line-height: 32px;
    margin-bottom: 20px;
    opacity: 0.6;
    color: white;
    text-decoration: none;
    &:hover {
      opacity: 1;
    }
  }
`

const Contact = () => {
  return (
    <Background>
      <Container>
        <H2>Contact</H2>
        <Title>"Never half-ass two things. Whole-ass one thing." <br /> - Ron Swanson</Title>
        <Border />
        <Row>
          <Column>
            <UL>
              <Li>
                <a href="https://www.linkedin.com/in/lwilsonsmith" target="_blank" rel="noopener noreferrer">
                  <TiSocialLinkedin />
                  https://www.linkedin.com/in/lwilsonsmith
                </a>
              </Li>
              <Li>
                <a href="https://twitter.com/lwilsonsmith" target="_blank" rel="noopener noreferrer">
                  <TiSocialTwitter />
                  https://twitter.com/lwilsonsmith
                </a>
              </Li>
            </UL>
          </Column>
          <Column>
            <UL>
              <Li>
                <a href="https://github.com/Fprince333" target="_blank" rel="noopener noreferrer">
                  <TiSocialGithub />
                  https://github.com/Fprince333
                </a>
              </Li>
              <Li>
                <a href="mailto:lwilsonsmith@gmail.com" target="_blank" rel="noopener noreferrer">
                  <TiMail />
                  lwilsonsmith@gmail.com
                </a>
              </Li>
            </UL>
          </Column>
        </Row>
        <Border />
        <Row>

        </Row>
      </Container>
    </Background>
  );
}

export default Contact;
