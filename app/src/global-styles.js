import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5;
    margin: 0;
  }

  #root {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
    box-sizing: border-box;
  }

  p,
  label {
    font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
