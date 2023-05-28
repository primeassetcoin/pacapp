

const hre = require("hardhat");

async function main() {

  const PrimeAssetCoin = await hre.ethers.getContractFactory("PrimeAssetCoin");
  const primeAssetCoin = await PrimeAssetCoin.deploy();

  await primeAssetCoin.deployed();

  console.log(
    `PrimeAssetCoin with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${primeAssetCoin.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
