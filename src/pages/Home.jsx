import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Home',
    };
  }

  render() {
    const { name } = this.state;

    return <h1>{name}</h1>;
  }
}

export default Home;
