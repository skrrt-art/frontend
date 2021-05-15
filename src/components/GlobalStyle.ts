import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
    font-family: Inter, sans-serif;
  }
`;
