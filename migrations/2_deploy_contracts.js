const Factory = artifacts.require("FreshFactory");

module.exports = async function (deployer, _network, addresses) {
  var result = await deployer.deploy(Factory, addresses[0]);
  await result.deployed();
};
