import { ethers } from "ethers";
import config from "../config/config";
let provider = null;
let contract = null;

if (typeof window !== "undefined" && window.ethereum) {
  provider = new ethers.BrowserProvider(window.ethereum); // Use BrowserProvider for MetaMask
  contract = new ethers.Contract(
    config.contractAddress,
    config.contractABI,
    provider
  );
}

export { provider, contract };
