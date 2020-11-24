import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './React-components/App';

import configureStore from './Redux-store';

const appStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
