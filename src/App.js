import React from 'react';
import { GlobalStyle } from './theme/globalStyle';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Abilities from './pages/Abilities';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

ReactGA.initialize('UA-58068154-1');
ReactGA.pageview("/");
ReactGA.pageview("/profile");
ReactGA.pageview("/experience");
ReactGA.pageview("/abilities");
ReactGA.pageview("/projects");
ReactGA.pageview("/contact");

class App extends React.Component {

  render() {

    return (
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/experience" component={Experience} />
          <Route path="/abilities" component={Abilities} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
