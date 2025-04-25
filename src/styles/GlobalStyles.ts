import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  
  body {
    font-family: 'Proxima Nova', 'IBM Plex Sans', sans-serif;
    background-color: #F8F8F8;
    color: #323F47;
  }

  #root {
    min-height: 100%;
    display: flex;
  }

  :root {
    --primary-color: #54D3C2;
    --secondary-color: #30898A;
    --dark-blue: #2D4258;
    --text-primary: #323F47;
    --text-secondary: #6D7986;
    --text-tertiary: #989FA3;
    --bg-light: #FFFFFF;
    --bg-primary: #F8F8F8;
    --alert-red: #FC5C65;
    --alert-yellow: #F7B731;
    --success-green: #73CF7A;
    --info-blue: #45AAF2;
    --purple: #A060FC;
    --chart-blue: #30C7DC;
    --chart-yellow: #F5E230;
    --border-radius-lg: 56px;
    --border-radius-md: 32px;
    --border-radius-sm: 24px;
    --border-radius-xs: 16px;
    --border-radius-xxs: 6px;
  }
`;

export default GlobalStyles; 