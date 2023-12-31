import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
