///////// DEPENDENCIES (w/o path) ///////////
// These two are dependencies from package.json
// Hence no path or extension
import React from 'react';
import ReactDOM from 'react-dom/client';
/////////////////

///////// LOCAL FILES (with path) ///////////
import './index.css';
import App from './component/App/App';
//import reportWebVitals from './reportWebVitals';
/////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject="Dikesh Chokshi"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
