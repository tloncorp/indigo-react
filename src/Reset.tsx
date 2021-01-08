import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes/light";

// Used to set browser default css to new defaults to accomodate Indigo
export const Reset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: normal;
  }
  html, body {
    background-color: ${(p: { theme: Theme }) => p.theme.colors.white};
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button, a {
    box-sizing: border-box;
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    user-select: none;
    margin: 0px;
    padding: 0px;
  }

  button:disabled {
    cursor: default;
  }
  img {
    height: auto;
    width: 100%;
  }
  * {
    outline: none;
  }

  @keyframes loadingSpinnerRotation {
    from {
        transform: rotate(0deg);
      }
    
      to {
        transform: rotate(360deg);
      }
  }

  button {
    transition: 50ms;
  }
`;
Reset.displayName = "CSSReset";
