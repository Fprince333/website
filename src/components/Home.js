import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    @media screen and (max-width: 480px) {
      left: 182px;
    }
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

const A = styled.div`
  border-bottom: 0;
  display: block;
  font-size: .8rem;
  height: 2.75rem;
  letter-spacing: .2rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.45rem;
  text-transform: uppercase;
  @media screen and (min-width: 480px) {
    min-width: 7.5rem;
  }
`

const MainContent = styled.main`
  display: flex;
  max-width: 100%;
  position: relative;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  z-index: 3;
`

const Header = props => {
  return (
    <MainContent>
      <HeaderTag style={props.timeout ? { display: 'none' } : {}}>
        <LogoContainer>
          <A><Link to="/"><Logo src={logo} /></Link></A>
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
            <FirstLi><A><Link to="/intro">Intro</Link></A></FirstLi>
            <Li><A><Link to="/work">Work</Link></A></Li>
            <Li><A><Link to="/about">About</Link></A></Li>
            <Li><A><Link to="/contact">Contact</Link></A></Li>
          </Ul>
        </Nav>
      </HeaderTag>
    </MainContent>
   );
}

export default Header;
