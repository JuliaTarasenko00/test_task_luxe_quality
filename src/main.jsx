import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rentzila">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);