import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
require('dotenv').config()

// Using react-snap to pre-render static HTML, more info here => https://github.com/stereobooster/react-snap

const AppWithRouter = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(AppWithRouter, rootElement);
} else {
  render(AppWithRouter, rootElement);
};
