import React from 'react';
import styled from 'styled-components';
import heat from '../images/heat.jpg';

const Jumbotron = styled.div`
  background-image: url(${heat});
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 100%;
  width: 100vw;
`

const ImageBackground = props => {
  return ( <Jumbotron>
    {props.children}
  </Jumbotron>);
}

export default ImageBackground;
