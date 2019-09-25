// @flow
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { ErrorBoundary } from "./Components/ErrorBoundry";
import { useErrorInterceptor } from "./Services/interceptors";
import Axios from "axios";

useErrorInterceptor(Axios);
loadProgressBar();

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
