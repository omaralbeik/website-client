import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Styled Components
import { ThemeProvider } from 'styled-components';
import { Dark, Light } from './thems';


ReactDOM.render(
  <ThemeProvider theme={ Light }><App/></ThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
