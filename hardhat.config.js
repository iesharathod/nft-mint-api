import "@nomicfoundation/hardhat-ethers";
import dotenv from "dotenv";

dotenv.config();

export default {
  solidity: "0.8.20",
  networks: {
    amoy: {
      type: "http",
      url: process.env.AMOY_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
