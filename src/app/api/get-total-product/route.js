// import { ethers } from "ethers";
// import { contractAbi, contractAddress } from "../../config";

// export default async function handler(req, res) {
//   const provider = new ethers.providers.JsonRpcProvider(
//     process.env.NEXT_PUBLIC_RPC_URL
//   );
//   const contract = new ethers.Contract(contractAddress, contractAbi, provider);

//   try {
//     const totalProduct = await contract.getTotalProduct();
//     res.status(200).json({ totalProduct: totalProduct.toString() });
//   } catch (error) {
//     console.error("Error fetching total products:", error);
//     res.status(500).json({ error: error.message });
//   }
// }

import Web3 from "web3";
import { NextResponse } from "next/server";
import { contractAbi,contractAddress } from "@/config/config";

export async function GET() {
  try {
    // Set up Web3 provider
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://rpc.sepolia.org")
    ); // Use your provider URL
    // Initialize contract
    const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

    // Fetch total products
    const totalProduct = await contract.methods.getTotalProduct().call();


    // Return the result
    return new Response(JSON.stringify({ totalProduct: totalProduct.toString() }), { status: 200 });
  } catch (error) {
    console.error("Error fetching total products:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}