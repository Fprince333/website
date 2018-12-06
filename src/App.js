import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme/globalStyle';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import VideoBackground from './components/VideoBackground';
import Home from './components/Home';
import Intro from './components/Intro';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  width: 100%;
  z-index: 3;
  ::before {
    content: "";
    display: block;
  }
  @media screen and (max-width: 1680px) {
		padding: 3rem 2rem;
  }
  @media screen and (max-width: 736px) {
		padding: 2rem 1rem;
  }
  @media screen and (max-width: 480px) {
		padding: 1rem;
  }
`

ReactGA.initialize('UA-58068154-1');
ReactGA.pageview("/");
ReactGA.pageview("/about");
ReactGA.pageview("/intro");
ReactGA.pageview("/work");
ReactGA.pageview("/contact");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 150);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }


  render() {

    return (
      <ThemeProvider theme={theme}>
        <div className="body">
          <GlobalStyle />
          <AppWrapper>
            <Router>
              <React.Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/intro" component={Intro} />
                <Route path="/work" component={Work} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </React.Fragment>
            </Router>
            <Footer />
          </AppWrapper>
          {window.innerWidth > 480 ? <VideoBackground/> : null}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
