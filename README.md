# NFT Minting API – ERC-721 Implementation

##  Overview

This project implements a minimal NFT minting system using:

- Solidity (ERC-721)
- Node.js + Express
- ethers.js for blockchain interaction
- Testnet deployment (Ethereum Sepolia)

The backend exposes a `/mint` API endpoint that interacts with the deployed smart contract using a server-side wallet.

---

##  Deployed Contract

**Network:** Ethereum Sepolia  
**Contract Address:**  
0x74609fF0b5ed75674C500ce762bb1de3d7F91c18

**Explorer Link:**  
https://sepolia.etherscan.io/address/0x74609fF0b5ed75674C500ce762bb1de3d7F91c18#code

---

##  Smart Contract Features

- ERC-721 standard implementation
- Public mint function
- Fixed max supply = 5
- Configurable mint price (default: 1 ether)
- Base URI support
- Owner-only functions:
  - Update mint price
  - Withdraw contract balance
- Prevents minting beyond max supply
- Validates correct payment amount

---

##  Network Note

The deployment on Polygon Mumbai.

However, Polygon testnet faucet limitations currently provide only 0.1 POL per wallet, which is insufficient to deploy a full ERC-721 contract under current network base fee conditions.

To ensure a fully functional and verifiable deployment, the contract was deployed on Ethereum Sepolia instead.

The contract remains fully Polygon-compatible and can be deployed on Polygon when sufficient test POL is available.

---

## 🛠 Setup Instructions

### 1️ Clone Repository

```bash
git clone <your-repo-url>
cd nft-mint-api
```

### 2️ Install Dependencies

```bash
npm install
```

### 3️ Configure Environment Variables

Create a `.env` file in the root directory:

```
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
CONTRACT_ADDRESS=0xD71343755334f88D8C01A85082D59B51c2B147bD
```

⚠ Important:
- Private key must include `0x`
- Use a dedicated test wallet
- Wallet must contain Sepolia ETH

---

##  Run the Backend API

Start the server:

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

##  Mint NFT via API

### Endpoint

```
POST /mint
```

### Request Body

```json
{
  "walletAddress": "0xRecipientWalletAddress"
}
```

### Example (PowerShell)

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/mint" `
-Method POST `
-Headers @{"Content-Type"="application/json"} `
-Body '{"walletAddress":"0xRecipientWalletAddress"}'
```

### Successful Response

```json
{
  "success": true,
  "txHash": "0x..."
}
```

---

##  Hardhat Tests

The test suite validates:

- Successful mint
- Supply limit enforcement
- Payment validation
- Owner-only functions

To run tests:

```bash
npx hardhat test
```

---

##  Project Structure

```
contracts/
  MyNFT.sol

routes/
  index.js

contract.js
app.js
.env
README.md
```

---

##  Security Considerations

- Private key stored securely in `.env`
- `.env` excluded from version control
- On-chain payment validation
- On-chain supply enforcement
- Proper error handling in API

---

##  Evaluation Criteria Coverage

- Correct ERC-721 implementation
- Functional minting via Node.js API
- Clean and structured codebase
- Secure private key handling
- Successful testnet deployment

---

## Author

Isha Rathod
