import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurCarousel from '../components/OurCarousel';
// import ClickableLink from '../components/ClickableLink';

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
        {/* <ClickableLink /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
