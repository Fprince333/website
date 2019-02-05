import React from 'react';
import styled from 'styled-components';
import heat from '../images/heat.jpg';

const Jumbotron = styled.div`
  background: no-repeat center center fixed url(${heat});
  background-size: 100% auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
`

const ImageBackground = props => {
  return ( <Jumbotron>
    {props.children}
  </Jumbotron>);
}

export default ImageBackground;
