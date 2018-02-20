import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        <p>{this.props.inheritence}</p>
      </div>
    )
  }
}

export default ClassComponent;
