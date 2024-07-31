import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const metaViewport = document.createElement('meta'); 
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0'; 

document.head.appendChild(metaViewport);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
