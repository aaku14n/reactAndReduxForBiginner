import React from 'react';
import {provider, Provider } from "react-redux"
import { createStore,applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import todoReducer from "./reducer";
import thunk from "redux-thunk";
const store = createStore(todoReducer,
    applyMiddleware(thunk.withExtraArgument({})));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
