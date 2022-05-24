import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'LeferiPoint-BlackObliqueA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }
  
  * {
    margin: 0;
    box-sizing: border-box;
  }

  *::-moz-selection {
    background-color: #555555; 
    color: #f4f5f6;
  }
  
  *::selection {
    background-color: #555555; 
    color: #f4f5f6;
  }

  html {
    width: 100%;
    padding: 0;
    background: #242424;
  }

  body {
    height: 100vh;
    box-sizing: border-box;
    margin: 0 auto;
    color: ${ props => props.theme.text_color };
    font-size: 1.125rem;
    font-family: ${ props => props.theme.fonts.base };

    @media screen and (max-width: 1023px) {
      width: 100%;
    }

    @media screen and (max-width: 599px) {
      /* add warning text */
    }
  }
`;

