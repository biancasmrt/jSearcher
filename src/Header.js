import React, { Component } from 'react';
import './Header.css';
import ReactTypingEffect from 'react-typing-effect';

export default class Header extends Component {
  render() {
    return (
      <div className="all">
        <div className="Header">
        <h1 className="logo">
            jSearcher
        </h1> 
        <ReactTypingEffect
          text="What's your question?" 
        />
        </div>
      </div>
    )
  }
}
