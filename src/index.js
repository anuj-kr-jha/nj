import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './App.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
