import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter history={ createBrowserHistory } >
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
