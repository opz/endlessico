var EndlessToken = artifacts.require("./EndlessToken.sol");
var EndlessCrowdsale = artifacts.require("./EndlessCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(EndlessToken).then(() => {
    deployer.deploy(EndlessCrowdsale, EndlessToken.address);
  });
};
