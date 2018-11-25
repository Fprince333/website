import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme/globalStyle';
import VideoBackground from './components/videoBackground';
import logo from './logo.svg';

const wpEndpoint = "https://www.lwilsonsmith.com/wp-json/wp/v2/";

const AppWrapper = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
	position: relative;
	height: 30vmin;
	z-index: 1;
`

const AppHeader = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`

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
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppWrapper>
            <AppHeader>
              <VideoBackground videoSrc={this.state.video} />
              <AppLogo src={logo} alt="WS logo" />
            </AppHeader>
          </AppWrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
