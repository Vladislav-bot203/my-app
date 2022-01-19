import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../src/lessons/redux/store";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
