import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';

// import store from '../reducers/store';

import Index from './Index';
import About from './About';

import Clicker from './Clicker';
import Cards from './Cards';

import Layout from './Layout';
import NotFoundPage from './NotFound';


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export class Routes extends React.Component {

  render(){
      console.log('route props :', this.props)
    return(
      // <Provider store={createStoreWithMiddleware(reducers)}>
        <Layout>
          <Switch>
            <Route exact path="/clicker" component={Clicker} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Index}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      // </Provider>
    );
  }
}

// export const App = () => (
//   // <Provider store={createStoreWithMiddleware(reducers)}>
//     <Layout>
//       <Switch>
//         <Route exact path="/cards" component={Cards} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/" component={Index}/>
//         <Route component={NotFoundPage} />
//       </Switch>
//     </Layout>
//   // </Provider>
// );

export default Routes;
