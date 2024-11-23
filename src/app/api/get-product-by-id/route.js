// import { NextResponse } from "next/server";
// import Web3 from "web3";
// import { contractAddress, contractAbi } from "../../../config/config";

// export async function POST(request) {
//   const { pid } = await request.json();

//   const web3 = new Web3(Web3.givenProvider);
//   const contract = new web3.eth.Contract(contractAbi, contractAddress);

//   try {
//     const product = await contract.methods.getProductById(pid).call();
//     return NextResponse.json({ product });
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import Web3 from "web3";
import { contractAbi, contractAddress } from "@/config/config";


export async function POST(request) {
  const { pid } = await request.json();
  const web3 = new Web3(
    new Web3.providers.HttpProvider("https://rpc.sepolia.org")
  ); // Use your provider URL
  // Initialize contract
  const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

  try {
    const product = await contract.getProductById(pid);
    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return NextResponse.error();
  }
}
