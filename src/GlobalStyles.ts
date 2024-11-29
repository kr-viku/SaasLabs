import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 20px;
  }

  .app-container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
