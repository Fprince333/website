import React from 'react';
import { Helmet } from "react-helmet";
import { isMobile, isBrowser } from "react-device-detect";
import Video from 'components/Video';
import Image from 'components/Image';

const Desktop = props => {
  return (<React.Fragment>
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
    <Video />
  </React.Fragment>
  )
}

const Mobile = props => {
  return (<React.Fragment>
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
    <Image />
  </React.Fragment>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: isMobile ? 'mobile' : 'desktop',
      isTop: false
    }
  }

  handleSize() {
    if (isBrowser && window.innerWidth > 768) {
      this.setState({ layout: 'desktop' });
    } else {
      this.setState({ layout: 'mobile' });
    }
  }

  handleScroll() {
    if (window.scrollY < window.innerHeight) {
      this.setState({ isTop: true });
    } else {
      this.setState({ isTop: false });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.layout !== this.state.layout || nextState.isTop !== this.state.isTop;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isTop) {
      window.history.replaceState({}, `Home`, `/`)
    }
  }

  componentDidMount() {
    this.handleSize();
    window.addEventListener('resize', () => this.handleSize())
    window.addEventListener('scroll', () => this.handleScroll())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleSize())
    window.removeEventListener('scroll', () => this.handleScroll())
  }

  render() {
    return ( this.state.layout === 'mobile' ? <Mobile title={this.props.title} description={this.props.description} /> : <Desktop title={this.props.title} description={this.props.description}/> );
  }
}

export default Page;
