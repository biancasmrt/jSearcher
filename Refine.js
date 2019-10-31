import React, { Component } from 'react';

export default class Refine extends Component {
  render() {
    return (
      <div className="refine">
        { this.props.children }
      </div>
    )
  }
}
