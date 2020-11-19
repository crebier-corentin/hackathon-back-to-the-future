import React, { Component } from 'react';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Order',
    };
  }

  render() {
    const { name } = this.state;

    return <h1>{name}</h1>;
  }
}

export default Order;
