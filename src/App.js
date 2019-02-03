import React from 'react';
import { GlobalStyle } from './theme/globalStyle';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Index from './components/Index';

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
          <Route path="/" exact component={Index} />
          <Route path="/profile" component={Index} />
          <Route path="/experience" component={Index} />
          <Route path="/abilities" component={Index} />
          <Route path="/projects" component={Index} />
          <Route path="/contact" component={Index} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
