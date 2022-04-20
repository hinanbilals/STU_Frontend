 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
import {BaseUrlContext} from './BaseUrlContext';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from './authConfig'
const msalInstance = new PublicClientApplication(msalConfig);
 

let BaseUrl="https://2c3d-119-152-148-245.ngrok.io"

 

ReactDOM.render(
    
  <Provider store={store}>
    <BaseUrlContext.Provider  value={BaseUrl}>
    <MsalProvider instance={msalInstance}>
    <App />
    </MsalProvider>
    </BaseUrlContext.Provider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
