import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Routing & Links
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Styled Components
import {ThemeProvider} from 'styled-components';
import {Dark, Light} from './thems';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Light}><App/></ThemeProvider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
