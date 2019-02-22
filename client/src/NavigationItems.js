import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';

import coins from './coin-stack.svg';
import wallet from './wallet.svg';

export default () => {
  let listItems = [
    (
      <Menu.Item key="contribute" as={NavLink} to="/contribute">
        <Image src={coins} className="MenuItemIcon" />Purchase Tokens
      </Menu.Item>
    ), (
      <Menu.Item key="wallet" as={NavLink} to="/wallet">
        <Image src={wallet} className="MenuItemIcon" />View My Wallet
      </Menu.Item>
    )
  ];

  return listItems;
}
