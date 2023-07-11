import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import App from './components/app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
console.log(root);
