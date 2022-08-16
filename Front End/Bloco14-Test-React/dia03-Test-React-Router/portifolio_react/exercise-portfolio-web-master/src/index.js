import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

export { default as AboutMe } from './pages/About/About';
export { default as ContactForm } from './pages/Contact/Contact';
export { default as Projects } from './pages/Projects/Projects';
