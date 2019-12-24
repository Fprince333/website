import React from 'react';
import styled, { css } from 'styled-components';
import ReactImageAppear from 'react-image-appear';
import heatImg from '../images/heat.jpg';
import heatGif from '../images/heat.gif';

const JumbotronContainer = styled.div`
  ${props => props.addCSS}
`

const jumbotronCss = css`
  height: 90vh;
  width: 100vw;
  img {
    height: 100%;
    width: 100%;
    display: block;
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
