import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme/globalStyle';
import YoutubeBackground from 'react-youtube-background';
import Header from './components/Header';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
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

  handleOpenArticle = article => {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible, article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle = () => {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  render() {
    const youtubeId = this.state.youtubeIds[Math.floor(Math.random() * this.state.youtubeIds.length)];
    return (
      <YoutubeBackground
        videoId={youtubeId}
        overlay="rgba(0,0,0,.5)">
        <ThemeProvider theme={theme}>
          <div className="body">
            <GlobalStyle />
            <AppWrapper>
              <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
              <Footer timeout={this.state.timeout} />
            </AppWrapper>
          </div>
        </ThemeProvider>
      </YoutubeBackground>
    );
  }
}

export default App;
