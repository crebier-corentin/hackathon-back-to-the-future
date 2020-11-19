import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Home',
    };
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Home;
