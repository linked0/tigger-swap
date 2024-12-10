const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");
require('dotenv').config();

async function main() {
    const provider = ethers.provider;
    const granter = new ethers.Wallet(process.env.GRANTER_KEY || "", provider);
    const grantee = process.env.GRANTEE || "";
    const amount = BigNumber.from(process.env.GRANT_AMOUNT || "0").mul(BigNumber.from(10).pow(18));

    const factory = await ethers.getContractFactory("Token");
    const contract = await factory.attach(process.env.BOA_ADDRESS).connect(granter);
    await contract.approve(grantee, amount);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
