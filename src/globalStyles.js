import { createGlobalStyle } from "styled-components";

import GillSans from "./fonts/GillSans.ttf";
import AvanteGarde from "./fonts/AvanteGarde.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gill Sans';
    src: url(${GillSans}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avante Int';
    src: url(${AvanteGarde}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* Далее идут стили для использования шрифтов */
`;

export default GlobalStyle;
