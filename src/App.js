import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme/globalStyle';
import VideoBackground from './components/VideoBackground';
import Header from './components/Header';
import Main from './components/Main';
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
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
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

    return (
      <ThemeProvider theme={theme}>
        <div className="body">
          <GlobalStyle />
          <AppWrapper>
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </AppWrapper>
          <VideoBackground/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
