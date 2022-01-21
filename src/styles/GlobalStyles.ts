import { createGlobalStyle } from "styled-components";
import Rubik from "../assets/fonts/rubik-regular.woff";
import Rubik2 from "../assets/fonts/rubik-regular.woff2";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Rubik';
        src: url(${Rubik}) format('woff2'),
             url(${Rubik2}) format('woff');
    }

    body {
        font-family: 'Rubik';
    }
`;

export default GlobalStyles;
