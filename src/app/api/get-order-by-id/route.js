import { NextResponse } from "next/server";
import Web3 from "web3";
import { contractAddress, contractAbi } from "../../../config/config";

export async function POST(request) {
  const { oid } = await request.json();

  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(contractAbi, contractAddress);

  try {
    const order = await contract.methods.getOrderById(oid).call();
    return NextResponse.json({ order });
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
