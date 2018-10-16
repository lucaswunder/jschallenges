import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    height: 100%;
    width: 100%;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }
  .main{
    display:flex;
    width:100%;
  }
`;
