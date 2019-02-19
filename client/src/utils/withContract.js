import React, { Component } from 'react';

export default function withContract(Contract) {
  return WrappedComponent => {
    return class extends Component {
      state = {
        contract: null
      }

      async componentDidUpdate(prevProps) {
        const { web3 } = this.props;

        if (web3 !== prevProps.web3) {
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = Contract.networks[networkId];
          const contract = new web3.eth.Contract(
            Contract.abi,
            deployedNetwork && deployedNetwork.address,
          );

          this.setState({ contract });
        }
      }

      render() {
        const { contract } = this.state;

        return <WrappedComponent {...this.props} contract={contract} />;
      }
    }
  };
}
