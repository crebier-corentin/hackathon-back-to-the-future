import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Search',
    };
  }

  render() {
    const { name } = this.state;

    return <h1>{name}</h1>;
  }
}

export default Search;
