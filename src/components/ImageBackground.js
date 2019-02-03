import React from 'react';
import styled from 'styled-components';
import heat from '../images/heat.jpg';

const Jumbotron = styled.div`
  background: no-repeat center center fixed url(${heat});
  background-size: cover;
  height: 100vh;
`

const ImageBackground = props => {
  return ( <Jumbotron>
    {props.children}
  </Jumbotron>);
}

export default ImageBackground;
