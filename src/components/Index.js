import React, { Component } from 'react';

import style from '../sass/style.scss';


export default class Index extends Component {

  componentDidMount(){
    console.log('index test log : ', this);
  }

  render() {
    return (
      <div className={style.test}>React simple starter</div>
    );
  }
}
