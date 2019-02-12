import React from 'react';
import { Icon, Menu, } from 'semantic-ui-react';

export default props => {
  const { web3 } = props;

  if (web3 && (window.ethereum || window.web3)) {
    return (
      <Menu.Item>
        <Icon name="check circle" color="green" /> Network Connected
      </Menu.Item>
    );
  } else {
    return (
      <Menu.Item>
        <Icon name="warning circle" color="red" /> MetaMask Not Installed
      </Menu.Item>
    );
  }
}
