require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0", // Ensure this matches your contract's Solidity version
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org", // From .env file
      accounts: [
        `cd1b7cd30b2c43f9d708c047d85d50fda72fad2582bdaae99a14245bbfb11e35`,
      ], // MetaMask private key
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
