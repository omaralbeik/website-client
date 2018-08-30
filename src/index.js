import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

// Local Storage
import { loadState, saveState } from './localStorage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Routing & Links
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux dev tools
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Redux Store
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, reduxDevTools);

store.subscribe(_ => {
  saveState({
    theme: store.getState().theme
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
