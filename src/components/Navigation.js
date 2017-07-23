import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, WithRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions';

import style from '../sass/style.scss';

class Navigation extends React.Component{


  handleSelect(evtKey,evt){
    console.log('nav bar selection ',evt,typeof evt,evtKey,typeof evtKey);
  }

  render(){


    return(<div id={style.NavPrimary}>
      <Navbar onSelect={(evtKey,evt)=>{this.handleSelect(evtKey,evt)}}>
        <Nav>

          <LinkContainer to="/Clicker">
            <NavItem eventKey={1}>ClickerTest</NavItem>
          </LinkContainer>

          <LinkContainer to="/Cards">
            <NavItem eventKey={2}>Test Cards and Clicker</NavItem>
          </LinkContainer>
        </Nav>

      </Navbar>
    </div>
    )
  }
}

export default connect()(Navigation)
