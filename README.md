# TiggerSwap contracts Readme
This project deploy UniSwapV2 contracts like `UniswapV2Router02` and `UniswapV2Factory`, `WETH` and `BOA` token, and tokens for testing like `A Game Token` and `B Game Token`. Also it mints `BOA` token to a user called `MINTEE_ADDRESS` for testing. Last not least, it approve also some `BOA` tokens to `Boa Token Bridge` called `GRANTEE`.

## Install
```
npm install
```

#### Caution
If you use `yarn install`, the following error occurs. So use `npm install`.
```
/Users/jay/.nvm/versions/node/v16.20.2/lib/node_modules/corepack/dist/lib/corepack.cjs:22095
  const isURL = URL.canParse(range);
                    ^

TypeError: URL.canParse is not a function
    at parseSpec (/Users/jay/.nvm/versions/node/v16.20.2/lib/node_modules/corepack/dist/lib/corepack.cjs:22095:21)
    at loadSpec (/Users/jay/.nvm/versions/node/v16.20.2/lib/node_modules/corepack/dist/lib/corepack.cjs:22158:11)
    at async Engine.findProjectSpec (/Users/jay/.nvm/versions/node/v16.20.2/lib/node_modules/corepack/dist/lib/corepack.cjs:22348:22)
    at async Engine.executePackageManagerRequest (/Users/jay/.nvm/versions/node/v16.20.2/lib/node_modules/corepack/dist/lib/corepack.cjs:22404:24)
    at async Object.runMain (/Users/jay/.nvm/versions/node/v16.20.2/lib/node_modules/corepack/dist/lib/corepack.cjs:23096:5)
```

## Deploy for Marigold(localnet)
```
npm run deploy:localnet
```
After deploying the contracts, the address printed should be written in `.env`.

If you want to verify that the contracts are correctly deployed and that liquidity has been added, you should run this script.
```
npm run get-pair:localnet
```

## Deploy
```
npm run deploy:devnet
```
After deploying the contracts, the address printed should be written in `.env`.

If you want to verify that the contracts are correctly deployed and that liquidity has been added, you should run this script.
```
npm run get-pair:devnet
```

## Mint, transfer, and approve
For testing, we mint `BOA` tokens to `MINTEE_ADDRESS` for testing. As of now, we transfers tokens instead of minting in fact.
```
yarn transfer:localnet
```
Check the balance.
```
yarn boa:localnet
```

Approve the tokens of `GRANTER_KEY` user to `GRANTEE` which is in fact `Boa Token Bridge` contract.
```
yarn allow:localnet
```
Check again balance and allowance
```
yarn boa:localnet
```
## TiggerSwap DEX Protocol 

A continuous, non-upgradable smart contract that creates an automated market maker facilitating the formation and exchange of the P2P market for BOA Coin & ERC-20 tokens on Agora BizNet.
