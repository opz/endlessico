var EndlessCrowdsale = artifacts.require("./EndlessCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(EndlessCrowdsale);
};
