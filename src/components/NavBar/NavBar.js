import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './NavBar.scss';


export default class NavBar extends Component {

  render() {
    return (
      <div className='nav-bar'>
        <a className='nav-links' href='/'>Main Logo</a>

        <a className='nav-links' href='/about'>About</a>
      </div>
    );
  }
}
