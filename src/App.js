import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme/globalStyle';
import YoutubeBackground from 'react-youtube-background';
import logo from './logo.svg';

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
      youtubeIds: [
        'ktSdle1Mwdg',
        'gnNsuErvvJM',
        'D_3xCnDxxU8',
        'ClASuxd8jQY',
        'UK32KG5EcbA',
        'GpNzlh5ALRA'
      ]
    }
  }

  render() {
    const youtubeId = this.state.youtubeIds[Math.floor(Math.random() * this.state.youtubeIds.length)];
    return (
      <YoutubeBackground
        videoId={youtubeId}
        overlay="rgba(0,0,0,.5)">
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <AppWrapper>
              <AppHeader>
                <AppLogo src={logo} alt="WS logo" />
              </AppHeader>
            </AppWrapper>
          </React.Fragment>
        </ThemeProvider>
      </YoutubeBackground>
    );
  }
}

export default App;
