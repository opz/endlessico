import React, { Component } from 'react';
import withWeb3 from './utils/withWeb3';

class BuyTokens extends Component {
  render() {
    return (
      <div className="BuyTokens">
      </div>
    );
  }
}

export default withWeb3(BuyTokens, true);
