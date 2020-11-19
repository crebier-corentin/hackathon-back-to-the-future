import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
