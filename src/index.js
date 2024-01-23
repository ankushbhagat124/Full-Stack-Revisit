import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
// Why Redux?
// Redux is a state management library that allows us to keep the state of our application in a store. It is a globalized state that can be accessed from any component. It helps us to build complex applications with ease. For example, if we want to share the state of our application between two components that are not related, we can use Redux to do that. Redux is a predictable state container for JavaScript applications. It helps us to write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. It is a state management tool that can be used with frameworks like React, Angular, and Vue. API calls are asynchronous, which means that we need to wait for the response from the server. Redux Thunk middleware allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. This is useful for API calls.
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
