import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform .325s ease-in-out, filter .325s ease-in-out,opacity .325s ease-in-out;
  background-image: radial-gradient(rgba(0,0,0,.25) 25%,transparent 55%);
  max-width: 100%;
  text-align: center;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ffffff;
  border-radius: 100%;
  margin-top: 0;
`

const Logo = styled.img`
  height: 3rem;
`

const Content = styled.div`
  border-bottom: 1px solid #fff;
  border-left-color: #fff;
  border-left-style: solid;
  border-right-color: #fff;
  border-right-style: solid;
  border-top: 1px solid #fff;
  max-width: 100%;
  ::before {
    background: #fff;
    content: "";
    display: block;
    height: calc(3.5rem + 1px);
    left: calc(50% - 1px);
    position: absolute;
    top: calc(-3.5rem - 1px);
    width: 1px;
  }
`

const Inner = styled.div`
  transition-delay: .25s;
  transition-duration: 0.75s, 0.75s, 0.325s;
  transition-property: max-height, padding, opacity;
  transition-timing-function: ease, ease, ease-in-out;
  padding: 3rem 2rem;
  max-height: 40rem;
  overflow: hidden;
`

const H1 = styled.h1`
  color: #fff;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: .5rem;
`

const P = styled.p`
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-size: .8rem;
  line-height: 2;
`

const Nav = styled.nav`
  ::before {
    background: #fff;
    content: "";
    display: block;
    height: calc(3.5rem + 1px);
    left: calc(50% - 1px);
    position: absolute;
    top: calc(-3.5rem - 1px);
    width: 1px;
  }
`

const Ul = styled.ul`
  border: 1px solid #fff;
  border-radius: 4px;
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
`

const FirstLi = styled.li`
  border-left: 0;
  padding-left: 0;
`

const Li = styled.li`
  border-left: 1px solid #fff;
  padding-left: 0;
`

const A = styled.a`
  border-bottom: 0;
  display: block;
  font-size: .8rem;
  height: 2.75rem;
  letter-spacing: .2rem;
  line-height: 2.75rem;
  min-width: 7.5rem;
  padding: 0 1.25rem 0 1.45rem;
  text-transform: uppercase;
`

const Header = props => {
  return (
    <HeaderTag style={props.timeout ? { display: 'none' } : {}}>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <Content>
        <Inner>
          <H1>Will Smith</H1>
          <H1>Web Developer</H1>
          <P>Making things happen on the net since modems made noise</P>
        </Inner>
      </Content>
      <Nav>
        <Ul>
          <FirstLi><A href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Intro</A></FirstLi>
          <Li><A href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</A></Li>
          <Li><A href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</A></Li>
          <Li><A href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</A></Li>
        </Ul>
      </Nav>
    </HeaderTag>
   );
}

export default Header;
