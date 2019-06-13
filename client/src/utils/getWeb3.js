import Web3 from "web3";
import Squarelink from 'squarelink';

const getWeb3 = async (resolve, reject) => {
  // Squarelink provider
  if (typeof getWeb3.web3 === 'undefined') {
    let network;

    if (process.env.NODE_ENV === 'production') {
      network = 'mainnet';
    } else {
      network = 'ropsten';
    }

    const clientId = process.env.REACT_APP_SQUARELINK_CLIENT_ID;
    const sqlk = new Squarelink(clientId, network);
    const web3 = new Web3(sqlk.getProvider());
    getWeb3.web3 = web3;
  }

  resolve(getWeb3.web3);
}

export default () => {
  return new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", () => {
      getWeb3(resolve, reject);
    });

    // If document is already loaded, no race conditions are possible.
    if (document.readyState === 'complete') {
      getWeb3(resolve, reject);
    }
  });
};
