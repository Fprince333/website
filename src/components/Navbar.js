import React from 'react';
import styled from 'styled-components';
import { SectionLink } from "react-scroll-section";
import { MdViewHeadline } from 'react-icons/md';

const Nav = styled.nav`
  border: 0px;
  background-color: #222222;
  position: sticky;
  top: 20px;
  width: 110px;
  z-index: 9999;
  margin-bottom: -400px;
  float: right;
  margin-right: 5%;
  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  @media (max-width: 767px) {
    margin-right: 0px;
    top: 0;
    width: 100%;
  }
`

const MobileNav = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    float: left;
  }
`

const MobileNavToggle = styled.button`
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border-radius: 4px;
  @media (min-width: 768px) {
    display: none;
  }
  svg {
    color: #ddd;
  }
`

const DesktopNav = styled.div`
  padding: 0px;
  @media (min-width: 768px) {
    border-top: 0;
  }
  @media (max-width: 767px) {
    display: ${props => (props.open ? 'block' : 'none')};
  }
`

const DesktopUl = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`

const LinkContainer = styled.div`
  height: 80px;
  text-align: center;
  padding-top: 30px;
  font-weight: 600;
  color: white;
`

class Li extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate() {
    if (window.scrollY < window.innerHeight) {
      window.history.replaceState({}, `Home`, `/`)
    } else {
      if (this.props.selected) {
        window.history.replaceState({}, this.props.section, `/${this.props.section}`)
      }
    }
  }

  componentDidMount() {
    const sections = Array.from(document.getElementsByClassName('section'));
    sections.forEach(section => {
      section.addEventListener('click', e => {
        const title = e.currentTarget.textContent;
        window.history.replaceState({}, title, `/${title.toLowerCase()}`)
      })
    })
  }

  render() {
    return (<li className={this.props.className} onClick={this.props.onClick} selected={this.props.isSelected}>{this.props.children}</li> );
  }
}

const DesktopLi = styled(Li)`
  height: 80px;
  color: ${props => (props.selected ? 'white' : 'inherit')};
  background: ${props => (props.selected ? '#0984e3' : 'inherit')};
  cursor: pointer;
`

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false
    }
  }

  toggleMenu() {
    this.setState({ showMobileNav: !this.state.showMobileNav})
  }

  closeMobileMenu() {
    this.setState({ showMobileNav: false })
  }

  render() {
    return (
      <Nav role="navigation">
        <MobileNav>
          <MobileNavToggle onClick={() => this.toggleMenu()}>
            <MdViewHeadline />
          </MobileNavToggle>
        </MobileNav>

        <DesktopNav open={this.state.showMobileNav}>
          <DesktopUl onClick={() => this.closeMobileMenu()}>
            <SectionLink section="profile">
              {({ onClick, isSelected }) => <DesktopLi className='section' section='profile' onClick={onClick} selected={isSelected}>
                  <LinkContainer>Profile</LinkContainer>
                </DesktopLi>}
            </SectionLink>
            <SectionLink section="experience">
              {({ onClick, isSelected }) => <DesktopLi className='section' section='experience' onClick={onClick} selected={isSelected}>
                <LinkContainer>Experience</LinkContainer>
              </DesktopLi>}
            </SectionLink>
            <SectionLink section="abilities">
              {({ onClick, isSelected }) => <DesktopLi className='section' section='abilities' onClick={onClick} selected={isSelected}>
                <LinkContainer>Abilities</LinkContainer>
              </DesktopLi>}
            </SectionLink>
            <SectionLink section="projects">
              {({ onClick, isSelected }) => <DesktopLi className='section' section='projects' onClick={onClick} selected={isSelected}>
                <LinkContainer>Projects</LinkContainer>
              </DesktopLi>}
            </SectionLink>
            <SectionLink section="contact">
              {({ onClick, isSelected }) => <DesktopLi className='section' section='contact' onClick={onClick} selected={isSelected}>
                <LinkContainer>Contact</LinkContainer>
              </DesktopLi>}
            </SectionLink>
          </DesktopUl>
        </DesktopNav>
      </Nav>
    );
  }
}

export default Navbar;
