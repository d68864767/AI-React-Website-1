import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
  }

  /* Header Styles */
  header {
    background-color: #f2f2f2;
    padding: 20px;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  nav ul li {
    margin-right: 10px;
  }

  nav ul li a {
    text-decoration: none;
    color: #333333;
    font-weight: bold;
  }

  /* Footer Styles */
  footer {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
  }

  /* Content Styles */
  div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;

export default GlobalStyles;
