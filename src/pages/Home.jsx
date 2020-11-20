import React, { Component } from 'react';

import OurCarousel from '../components/OurCarousel';
import ClickableLink from '../components/ClickableLink';
import HomeDetails from '../components/HomeDetails';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <OurCarousel />
        <ClickableLink />
        <HomeDetails />
      </div>
    );
  }
}

export default Home;
