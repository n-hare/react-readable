import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App store={store}/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
