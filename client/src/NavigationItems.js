import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';

import coins from './coin-stack.svg';

export default props => {
  const { web3, accounts } = props;

  let listItems = [
    (
      <Menu.Item key="contribute" as={NavLink} to="/contribute">
        <Image src={coins} className="MenuItemIcon" />Purchase Tokens
      </Menu.Item>
    )
  ];

  if (web3 && accounts && accounts.length > 0) {
    // Add Nav item for viewing your accounts tokens
  }

  return listItems;
}
