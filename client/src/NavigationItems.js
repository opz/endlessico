import React from 'react';

export default props => {
  const { web3, accounts } = props;

  let listItems = [
    // Default menu items
  ];

  if (web3 && accounts && accounts.length > 0) {
    // Menu items requiring metamask
  }

  return listItems;
}
