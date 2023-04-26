import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
//import store  from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";
import {createBrowserHistory} from 'history';
import { getConfig } from "./config";
import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/Users";
const history = createBrowserHistory();
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
const onRedirectCallback = (appState) => {
  console.log(window.location.pathname)
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <Auth0Provider {...providerConfig}>
     <Provider store={store}>
    <App />
    </Provider>
  </Auth0Provider>
);