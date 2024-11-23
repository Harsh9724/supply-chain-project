import Web3 from "web3";
import { contractAddress, contractAbi } from "@/config/config";

export async function POST(req) {
  const { account } = await req.json();
  console.log(account);

  if (!account) {
    return new Response(JSON.stringify({ error: "Missing account" }), {
      status: 400,
    });
  }

  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://rpc.sepolia.org")
    );
    const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);
    const isRegistered = await contract.methods.isRegistered(account).call();
    console.log(isRegistered);
    return new Response(JSON.stringify({ isRegistered }), { status: 200 });
  } catch (error) {
    console.error("Error checking registration:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
