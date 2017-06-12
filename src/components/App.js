import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import Index from './index';

import '../static/styles/index.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


export const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>

        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>

  </Provider>)

export default App;
