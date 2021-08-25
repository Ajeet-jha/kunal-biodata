import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// hydrate is required by react-snap.
rootElement.hasChildNodes() 
? hydrate(<StrictApp />, rootElement) 
: render(<StrictApp />, rootElement)

