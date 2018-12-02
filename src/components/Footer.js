import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
  margin-top: 2rem;
  max-width: 100%;
  transition: transform .325s ease-in-out,filter .325s ease-in-out,opacity .325s ease-in-out;
  width: 100%;
  text-align: center;
`
const FooterP = styled.p`
  font-size: .6rem;
  letter-spacing: .2rem;
  margin-bottom: 0;
  opacity: .75;
  text-transform: uppercase;
`

const Footer = props => (
  <FooterTag style={props.timeout ? { display: 'none' } : {}}>
    <FooterP>Made in 2018</FooterP>
  </FooterTag>
)

export default Footer;
