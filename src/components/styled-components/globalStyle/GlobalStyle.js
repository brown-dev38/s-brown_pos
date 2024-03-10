import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-VariableFont_slnt,wght.ttf') format('truetype');
    font-style: normal; /* หรือ italic */
    font-weight: 400; /* 100 ถึง 900 */
  }

  @font-face {
    font-family: 'Noto Sans Thai';
    src: url('/fonts/Noto_Sans_Thai/NotoSansThai-VariableFont_wdth,wght.ttf') format('truetype');
    font-style: normal; /* หรือ italic */
    font-weight: 400; /* 100 ถึง 900 */
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font.inter};
    background-color: ${(props) => props.theme.color.grayBlackground};
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
