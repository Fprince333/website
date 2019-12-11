import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300italic,600italic,300,600);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
  @font-face {
    font-family: 'TrueLies';
    src: url('fonts/TrueLies.eot');
    src: url('fonts/TrueLies.eot') format('embedded-opentype'),
         url('fonts/TrueLies.woff2') format('woff2'),
         url('fonts/TrueLies.woff') format('woff'),
         url('fonts/TrueLies.ttf') format('truetype'),
         url('fonts/TrueLies.svg#TrueLies') format('svg');
        }

  *, :after, :before {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Source Sans Pro, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.65;
  }

  h1,
  h2 {
    font-family: 'TrueLies', Source Sans Pro, sans-serif;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export { GlobalStyle };
