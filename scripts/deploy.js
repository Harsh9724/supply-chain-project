async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Fetch the balance directly from the provider
  const balance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatUnits(balance, "ether"));

  const SupplyChain = await ethers.getContractFactory("SupplyChain");
  console.log("Deploying SupplyChain contract...");

  const supplyChain = await SupplyChain.deploy();
  await supplyChain.deploymentTransaction().wait(); // Wait for the deployment to be mined

  console.log("SupplyChain contract deployed to:", supplyChain.target); // 'target' holds the contract address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });