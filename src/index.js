import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain="dev-3ipgnjq2e5al672h.us.auth0.com"
        clientId="6cQsezRx8zKfAbaEA5gfMCcI4yZ0kw0b"
        authorizationParams={{
          redirect_uri: window.location.origin+"/ml-web-course"
        }}
      >
        <App />
      </Auth0Provider>,
    </HashRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
