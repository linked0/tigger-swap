const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");
require('dotenv').config();

// Getting feeTo from the contract
async function main() {
  const provider = ethers.provider;
  const granter = new ethers.Wallet(process.env.GRANTER_KEY || "", provider);
  const factory = await ethers.getContractFactory("Token");
  const contract = await factory.attach(process.env.BOA_ADDRESS);
  const bal = await contract.balanceOf(process.env.MINTEE_ADDRESS);
  console.log("Balance of", process.env.MINTEE_ADDRESS, bal.div(BigNumber.from(10).pow(18)).toString());

  const allow = await contract.allowance(granter.address, process.env.GRANTEE);
  console.log("Allowance of", process.env.GRANTEE, "to", process.env.BOA_ADDRESS, allow.div(BigNumber.from(10).pow(18)).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
