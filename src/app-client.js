/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import WithStylesContext from './WithStylesContext';

ReactDOM.render(
  <WithStylesContext onInsertCss={styles => styles._insertCss()}>
    <Router>
      <App/>
    </Router>
  </WithStylesContext>
, document.getElementById('main'));
