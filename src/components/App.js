import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import PostsIndex from './posts_index';
import PostsNew from './post_new';
import PostsShow from './posts_show';

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
