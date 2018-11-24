import React, { Component } from 'react';
import VideoBackground from './components/videoBackground';
import logo from './logo.svg';
import './App.css';

const wpEndpoint = "https://www.lwilsonsmith.com/wp-json/wp/v2/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    }
  }

  setVideoForClipUrl = url => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ video: json[0].source_url })
      })
  }

  componentDidMount() {
    fetch(`${wpEndpoint}clip`)
      .then(res => res.json())
      .then(json => {
        const clipIndex = Math.floor((Math.random() * json.length));
        this.setVideoForClipUrl(json[clipIndex]._links["wp:attachment"][0].href)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <VideoBackground videoSrc={this.state.video} />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
