var EndlessToken = artifacts.require("EndlessToken");

module.exports = function(deployer) {
  deployer.deploy(EndlessToken, '5312000000000000000000');
};
