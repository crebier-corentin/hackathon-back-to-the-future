import React, { Component } from 'react';

import OurCarousel from '../components/OurCarousel';
import ClickableLink from '../components/ClickableLink';

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
      </div>
    );
  }
}

export default Home;
