import Web3 from "web3";
import { contractAbi,contractAddress } from "@/config/config";

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch (error) {
    console.error("Invalid JSON input:", error);
    return new Response(JSON.stringify({ error: "Invalid JSON input" }), {
      status: 400,
    });
  }


  const { pid, quantity, cname, daddress, account } = data;
  console.log(pid,quantity,cname,daddress,account);
  if (!pid || !quantity || !cname || !daddress || !account) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://rpc.sepolia.org")
    );
    const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

    console.log("connected");
    // Ensure the account is unlocked and used correctly
    const tx = await contract.methods
      .placeOrder(cname, daddress, pid, quantity)
      .send({
        from: account,
        gas: 300000,
      });

    return new Response(
      JSON.stringify({ success: true, txHash: tx.transactionHash }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error placing order:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
