import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurCarousel from '../components/OurCarousel';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <OurCarousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
