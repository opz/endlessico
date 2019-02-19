var EndlessToken = artifacts.require("EndlessToken");
var EndlessCrowdsale = artifacts.require("EndlessCrowdsale");

module.exports = function(deployer) {
  deployer.deploy(EndlessCrowdsale, EndlessToken.address)
    .then(async crowdsale => {
      const token = await EndlessToken.deployed();
      token.addMinter(crowdsale.address);
    });
};
