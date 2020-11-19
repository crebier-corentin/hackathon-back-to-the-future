import React, { Component } from 'react';

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Artist',
    };
  }

  render() {
    const { name } = this.state;

    return <h1>{name}</h1>;
  }
}

export default Artist;
