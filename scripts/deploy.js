const hre = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the balance of the deployer
  // const balance = await hre.ethers.provider.getBalance(deployer.address);
  // console.log("Account balance:", hre.ethers.utils.formatEther(balance), "ETH");

  // Compile and deploy the contract
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
  console.log("Deploying SupplyChain contract...");

  // Deploy the contract
  const supplyChain = await SupplyChain.deploy();
  console.log("Contract deployed at:", supplyChain.target);

  // Verify contract deployment
  const code = await hre.ethers.provider.getCode(supplyChain.target);
  if (code === "0x") {
    console.log("Contract deployment failed!");
  } else {
    console.log("Contract successfully deployed!");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
