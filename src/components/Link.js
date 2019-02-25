import React from 'react';
import styled from 'styled-components';

class LinkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    const section = document.getElementsByClassName('home')[0]
    section.addEventListener('click', e => {
      window.history.replaceState({}, `Profile`, `/profile`)
    })
  }

  render() {
    return (<div className={this.props.className} onClick={this.props.onClick} selected={this.props.isSelected}>{this.props.children}</div> );
  }
}

const Link = styled(LinkComponent)`
  height: 80px;
  width: 110px;
  display: block;
  position: absolute;
  bottom: 0px;
  right: 5%;
  background-color: #222222;
  text-align: center;
  z-index: 6;
  cursor: pointer;
  svg {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: #FFFFFF;
    width: 80%;
    height: 100%;
  }
  @media (max-width: 767px) {
    position: sticky;
    width: 100%;
    right: 0;
  }
`
export default Link;

