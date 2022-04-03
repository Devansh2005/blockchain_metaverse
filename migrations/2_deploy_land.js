const Land = artifacts.require("Land");

module.exports = async function (deployer) {

    const NAME = "Devansh's Land";
    const SYMBOL = "DL";
    const COST = web3.utils.toWei("1", "ether");



  await deployer.deploy(Land, NAME, SYMBOL, COST);
};
