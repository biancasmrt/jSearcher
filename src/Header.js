import React, { Component } from 'react';
import './Header.css';
import ReactTypingEffect from 'react-typing-effect';
import logo from './images/whitelogo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="all">
        <div className="Header">
          <h1 className="logo">
              jSearcher
          </h1>
          <div className="scroll">
            hi
            {/* <ReactTypingEffect
              text="What's your question?" 
            /> */}
          </div>
          {/* <img src={logo} alt="golf"/> */}
        </div>
      </div>
    )
  }
}
