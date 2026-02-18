import { ethers } from "hardhat";

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  const nft = await MyNFT.deploy("https://example.com/metadata/");

  await nft.waitForDeployment();

  console.log("Contract deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
