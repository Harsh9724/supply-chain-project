import { NextResponse } from "next/server";
import Web3 from "web3";
import { contractAddress, contractAbi } from "../../../config/config";

export async function POST(request) {
  const { account } = await request.json();

  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(contractAbi, contractAddress);

  try {
    const totalOrder = await contract.methods.getTotalOrder(account).call();
    return NextResponse.json({ totalOrder });
  } catch (error) {
    console.error("Error fetching total orders:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
