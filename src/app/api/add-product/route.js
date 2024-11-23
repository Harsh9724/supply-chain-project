import { NextResponse } from "next/server";
import Web3 from "web3";
import { contractAddress, contractAbi } from "../../../config/config";

export async function POST(req) {
  const { pname, price, quantity, account } = await req.json();

  if (!pname || !price || !quantity || !account) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://rpc.sepolia.org")
    );
    const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

    const tx = await contract.methods
      .addProduct(pname, price, quantity)
      .send({ from: account });

    return new Response(
      JSON.stringify({ success: true, txHash: tx.transactionHash }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
