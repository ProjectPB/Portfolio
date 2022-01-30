import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
