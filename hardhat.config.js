/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
   defaultNetwork: 'standalone',
   networks: {
      hardhat: {},
      testnet: {
         url: process.env.TESTNET_URL,
         accounts: [process.env.ADMIN_KEY],
         chainId: parseInt(process.env.TESTNET_CHAIN_ID),
         gas: 2100000,
         gasPrice: 8000000000
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         }
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
