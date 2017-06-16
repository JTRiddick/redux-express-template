import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';

import Layout from './Layout.js'
import NotFoundPage from './NotFound.js'
import Index from './Index';
import About from './About';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const App = () => (
  //Layout component
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Layout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Index} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </Provider>
  )

export default App;
