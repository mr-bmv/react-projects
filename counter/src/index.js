import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState());
  return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
