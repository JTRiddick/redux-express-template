import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// require('src/static/sass/style.scss');
import style from '../static/sass/style.scss';



export class App extends Component {
  render() {
    return (
      <div className={style.test}>React simple starter</div>
    );
  }
}

export default withStyles(style)(App);
