import React from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  </Provider>
);

export default App;
