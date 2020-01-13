import React from 'react';
import { Helmet } from "react-helmet";
import { isMobile, isBrowser } from "react-device-detect";
import Video from 'components/Video';
import Image from 'components/Image';
import homeImg from '../images/home.jpg';
import profileImg from '../images/profile.jpg';
import experienceImg from '../images/experience.jpg';
import abilitiesImg from '../images/abilities.jpg';
import projectsImg from '../images/projects.jpg';
import contactImg from '../images/contact.jpg';


const Desktop = props => {
  const linkPath = props.title === "Will Smith" ? "" : props.title.split(" | ")[1].toLowerCase();
  return (<React.Fragment>
    <Helmet>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:url" content={`https://www.lwilsonsmith.com/${linkPath}`} />
      <link rel="canonical" href={`https://www.lwilsonsmith.com/${linkPath}`} />
      {linkPath === '' && <meta property="og:image" content={`${homeImg}`} /> }
      {linkPath === 'profile' && <meta property="og:image" content={`${profileImg}`} /> }
      {linkPath === 'experience' && <meta property="og:image" content={`${experienceImg}`} /> }
      {linkPath === 'abilities' && <meta property="og:image" content={`${abilitiesImg}`} /> }
      {linkPath === 'projects' && <meta property="og:image" content={`${projectsImg}`} /> }
      {linkPath === 'contact' && <meta property="og:image" content={`${contactImg}`} /> }
    </Helmet>
    <Video />
  </React.Fragment>
  )
}

const Mobile = props => {
  const linkPath = props.title === "Will Smith" ? "" : props.title.split(" | ")[1].toLowerCase();
  return (<React.Fragment>
    <Helmet>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:url" content={`https://www.lwilsonsmith.com/${linkPath}`} />
      <link rel="canonical" href={`https://www.lwilsonsmith.com/${linkPath}`} />
      {linkPath === 'home' && <meta property="og:image" content={`${homeImg}`} /> }
      {linkPath === 'profile' && <meta property="og:image" content={`${profileImg}`} /> }
      {linkPath === 'experience' && <meta property="og:image" content={`${experienceImg}`} /> }
      {linkPath === 'abilities' && <meta property="og:image" content={`${abilitiesImg}`} /> }
      {linkPath === 'projects' && <meta property="og:image" content={`${projectsImg}`} /> }
      {linkPath === 'contact' && <meta property="og:image" content={`${contactImg}`} /> }
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
    if (window.location.pathname.split("/")[1] === "index.html") {
      window.history.replaceState({}, `Home`, `/`)
    }
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
