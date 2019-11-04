import React from 'react';
import styled from 'styled-components';
import intro from '../images/intro.jpg';

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

const Image = styled.img`
  display: flex;
  border-radius: 50%;
  margin: 15px auto;
  border: 8px solid #0984e3;
  width: 100%;
  height: auto;
  max-width: 246px;
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
    width: 33%;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Profile = () => {
  return (
    <Background>
      <Container>
        <H2>Profile</H2>
        <Title>Seasoned web & marketing professional with experience translating company and client needs into functional, interactive applications.</Title>
        <Border/>
        <Row>
          <Column>
            <H3>About me</H3>
            <p>I specialize in designing & developing user interfaces, large-scale web projects and all forms of digital products. During my career, I have both taught and been taught to code in front and back-end programming languages. I stay current with the latest trends with a growth mindset and a passion for curiosity.</p>
          </Column>
          <Column>
            <Image src={intro} alt="Will Smith" />
          </Column>
          <Column>
            <H3>Details</H3>
            <p>
              <strong>Name:</strong><br />
                Will Smith<br />
              <strong>Age:</strong><br />
                34<br />
              <strong>Location:</strong><br />
                New York, NY
            </p>
          </Column>
        </Row>
      </Container>
		</Background>
  );
}

export default Profile;
