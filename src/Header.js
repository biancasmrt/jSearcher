import React, { Component } from 'react';
import './Header.css';
import ReactTypingEffect from 'react-typing-effect';
import logo from './images/whitelogo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="all">
        <div className="Header">
            <div className="stuff">
            <h1 className="logo">
                jSearcher
            </h1>
            
            <div className="scroll">
              <ReactTypingEffect
                text="What's your question?" 
              /> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
