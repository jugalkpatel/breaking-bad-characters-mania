import { createGlobalStyle } from "styled-components";
import Rubik from "../fonts/rubik-regular.woff";
import Rubik2 from "../fonts/rubik-regular.woff2";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Rubik';
        src: url(${Rubik}) format('woff2'),
             url(${Rubik2}) format('woff');
    }

    body {
        font-family: 'Rubik';
    }
`;

export default FontStyles;
