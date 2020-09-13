import React from 'react';
import styled, { css } from 'styled-components';
import ReactImageAppear from 'react-image-appear';
import heatImg from '../images/heat.jpg';
import heatGif from '../images/heat.gif';

const JumbotronContainer = styled.div`
  ${props => props.addCSS}
`

const jumbotronCss = css`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
    display: block;
    position: absolute;
    z-index: -1;
  }
`

const ImageBackground = props => {
  return ( <JumbotronContainer addCSS={jumbotronCss}>
    <ReactImageAppear
      src={heatGif}
      placeholder={heatImg}
      showLoader={false}
    />{props.children}
  </JumbotronContainer>);
}

export default ImageBackground;
