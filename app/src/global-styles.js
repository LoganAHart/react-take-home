import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif;
  }

  #root {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
