import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";
import "mapbox-gl/dist/mapbox-gl.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
`;
