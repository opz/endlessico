const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

const getEnv = env => {
  const value = process.env[env];

  if (typeof value === 'undefined') {
    throw new Error(`${env} environment variable has not been set.`);
  }

  return value;
};

const mnemonicEnv = 'ETH_WALLET_MNEMONIC';
const mnemonic = getEnv(mnemonicEnv);

const testNetworkEnv = 'ETH_TEST_NETWORK';
const testNetwork = getEnv(testNetworkEnv);

const testNetworkIdEnv = 'ETH_TEST_NETWORK_ID';
const testNetworkId = getEnv(testNetworkIdEnv);

const liveNetworkEnv = 'ETH_LIVE_NETWORK';
const liveNetwork = getEnv(liveNetworkEnv);

const liveNetworkIdEnv = 'ETH_LIVE_NETWORK_ID';
const liveNetworkId = getEnv(liveNetworkIdEnv);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  mocha: {
    useColors: false
  },
  networks: {
    test: {
      provider: function() {
        return new HDWalletProvider(mnemonic, testNetwork);
      },
      network_id: testNetworkId
    },
    live: {
      provider: function() {
        return new HDWalletProvider(mnemonic, liveNetwork);
      },
      network_id: liveNetworkId,
      gasPrice: 10000000000
    }
  }
};
