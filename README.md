# Learnings from "Gregory"

# Metaverse 

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache](https://www.trufflesuite.com/ganache) (For Local Blockchain)
- [MetaMask](https://metamask.io/) (Ethereum Wallet)
- [ThreeJS](https://threejs.org/docs/index.html) (3D Javascript library)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (React renderer for Three.js)
- [@react-three/drei](https://docs.pmnd.rs/drei/introduction) (Extra helpers for React-Three-Fiber)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), I recommend using node version v14 or v16 to avoid any potential dependency issues
- Install [Truffle](https://www.trufflesuite.com/docs/truffle/overview), In your terminal, you can check to see if you have truffle by running `truffle --version`. To install truffle run `npm i -g truffle`.
- Install [Ganache](https://www.trufflesuite.com/ganache).
- Install [MetaMask](https://metamask.io/) in your browser.

## Setting Up
### 1. Clone/Download the Repository
`git clone https://github.com/Devansh2005/blockchain_metaverse.git`


### 2. Install Dependencies:
`$ npm install `

## open the terminal and start testing 

- Run `ganache-cli` - This will give 10 Private keys and accounts having 100 eth each.


### 3. Migrate Smart Contracts (Deployment) -- on another terminal
`$ truffle migrate --reset`

### 4. Test Smart Contracts
`$ truffle test`

### 5. Start Frontend
`$ npm start`

### Don't Forget to connect your metamask account with one of the ganache-cli Private key. 


https://user-images.githubusercontent.com/58529382/161428335-9a8dd801-f9cd-4fbe-a695-f74e5e4ef9bf.mp4




https://user-images.githubusercontent.com/58529382/161428388-48174523-2503-4f18-a91d-b0a4afb4b018.mp4

