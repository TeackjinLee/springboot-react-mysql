import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from "react-cookie";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>
);
