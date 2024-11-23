import Web3 from "web3";
import { contractAddress, contractAbi } from "@/config/config";
import { NextResponse } from "next/server";
 

export async function POST(req) {
  try {
    const { account, name } = await req.json();

    if (!account || !name) {
      return NextResponse.json(
        { error: "Missing account or name" },
        { status: 400 }
      );
    }

    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL)
    ); // Replace with your provider
    const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

    
    const gasEstimate = await contract.methods
      .registerProducer(name)
      .estimateGas({ from: account });
    const gasPrice = await web3.eth.getGasPrice();

    const tx = {
      from: account,
      to: contractAddress,
      data: contract.methods.registerProducer(name).encodeABI(),
      gas: web3.utils.toHex(gasEstimate), // Properly format gas
      gasPrice: web3.utils.toHex(gasPrice), // Properly format gasPrice
    };
    const signedTx = await web3.eth.accounts.signTransaction(
      tx,
      process.env.PRIVATE_KEY
    );
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    return NextResponse.json(
      { status: "Producer registered", receipt },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error registering producer:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}