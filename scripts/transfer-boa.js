const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");
require('dotenv').config();

// Getting feeTo from the contract
async function main() {
  const admin = await ethers.getSigner();
  const factory = await ethers.getContractFactory("Token");
  const contract = await factory.attach(process.env.BOA_ADDRESS).connect(admin);
  const mintAmount = BigNumber.from(process.env.MINT_AMOUNT).mul(BigNumber.from(10).pow(18));
  await contract.transfer(process.env.MINTEE_ADDRESS, mintAmount);

  const bal = await contract.balanceOf(process.env.MINTEE_ADDRESS);
  console.log("Balance of", process.env.MINTEE_ADDRESS, bal);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
