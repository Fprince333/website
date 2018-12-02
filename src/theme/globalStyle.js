import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300italic,600italic,300,600);

  *, :after, :before {
    box-sizing: border-box;
  }

  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: Source Sans Pro,sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.65;
  }

  body .body.is-loading *,
  body .body.is-loading :after,
  body .body.is-loading :before,
  body.is-loading *,
  body.is-loading :after,
  body.is-loading :before,
  body.is-switching *,
  body.is-switching :after,
  body.is-switching :before {
    animation: none!important;
    transition: none!important;
  }

  header > * {
    margin-top: 3.5rem;
    position: relative;
    transition: opacity .325s ease-in-out;
  }

  a {
    border-bottom: 1px dotted hsla(0,0%,100%,.5);
    color: inherit;
    text-decoration: none;
    transition: color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;
  }

  ul {
    list-style: none;
    margin: 0 0 2rem;
    padding-left: 1em;
  }

  p {
    margin: 0 0 2rem;
  }
`;

const theme = {
  primary: '#61dafb'
}

export { theme, GlobalStyle  };
