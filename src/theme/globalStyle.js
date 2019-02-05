import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300italic,600italic,300,600);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

  *, :after, :before {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Source Sans Pro,sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.65;
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
