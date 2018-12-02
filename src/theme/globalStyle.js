import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300italic,600italic,300,600);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

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
    color: inherit;
    text-decoration: none;
    transition: color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;
  }

  article {
    background-color: rgba(27,31,34,.85);
    border-radius: 4px;
    padding: 4.5rem 2.5rem 1.5rem;
    transition: opacity .325s ease-in-out, transform .325s ease-in-out;
    width: 40rem;
    max-width: 100%;
    position: relative;
  }

  ul {
    list-style: none;
    margin: 0 0 2rem;
    padding-left: 1em;
  }

  p {
    margin: 0 0 2rem;
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

const theme = {
  primary: '#61dafb'
}

export { theme, GlobalStyle  };
