import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  margin-bottom: 25vh;
  color: white;
  padding: 2rem;
  text-align: center;
`

const H1 = styled.h1`
  padding-bottom: 20px;
  border-bottom: 1px solid #FFFFFF;
  border-bottom-color: rgba(255,255,255,0.35);
  display: inline-block;
  font-weight: 700;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 65px;
  }
`

const P = styled.p`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: 200;
  line-height: 1.4;
`

const Top = () => {
  return (<Container>
    <H1>Will Smith</H1>
    <P>Web Developer & Technical Producer of Digital Products</P>
  </Container>);
}

export default Top;
