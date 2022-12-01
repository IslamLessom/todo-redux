import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createRoot } from 'react-dom/client';

//REDUX
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducer/rootReducer.js'
import { legacy_createStore as createStore } from 'redux';

const store = createStore(rootReducer)

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
