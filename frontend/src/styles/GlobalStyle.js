import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
