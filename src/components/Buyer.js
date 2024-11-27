"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

// Assuming you have a contract object initialized with the ABI and address
import { contract } from "../lib/ethers";

export default function Buyer() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orders, setOrders] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request MetaMask account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Set up Web3Provider and signer
        const ethProvider = new Web3Provider(window.ethereum);
        const ethSigner = ethProvider.getSigner();

        setProvider(ethProvider);
        setSigner(ethSigner);

        // Log the connected wallet address
        const address = await ethSigner.getAddress();
        console.log("Wallet connected:", address);
        setWalletConnected(true); // Mark the wallet as connected
      } catch (err) {
        console.error("Error connecting to wallet:", err);
        alert("Please connect your wallet.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Fetch products from the contract
  const fetchProducts = async () => {
    try {
      const totalProducts = await contract.productCount();
      console.log("Total products:", totalProducts);

      const productsList = [];
      for (let i = 1; i <= totalProducts; i++) {
        const product = await contract.getProduct(i);
        productsList.push(product);
      }
      setProducts(productsList);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Fetch orders placed by the buyer
  const fetchOrders = async () => {
    if (!signer) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const contractWithSigner = contract.connect(signer);

      // Fetch total number of orders
      const totalOrders = await contract.orderCount();
      const ordersList = [];

      // Loop through all orders and fetch them
      for (let i = 1; i <= totalOrders; i++) {
        const order = await contract.orders(i);
        ordersList.push(order);
      }

      setOrders(ordersList);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // Place an order for the selected product
  const placeOrder = async () => {
    if (!signer) {
      alert("Please connect your wallet first.");
      return;
    }

    if (!selectedProductId || quantity <= 0 || !deliveryAddress) {
      alert("Please fill in all the fields correctly.");
      return;
    }

    try {
      const contractWithSigner = contract.connect(signer);

      // Call placeOrder function from contract
      const transaction = await contractWithSigner.placeOrder(
        selectedProductId,
        quantity,
        deliveryAddress
      );
      console.log("Order placed:", transaction);

      // After placing the order, reset the fields
      setQuantity(0);
      setDeliveryAddress("");
      setSelectedProductId(null);

      // Fetch orders again to show the newly placed order
      fetchOrders();
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  // Check if wallet is connected when the component mounts
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const ethProvider = new Web3Provider(window.ethereum);
        const ethSigner = ethProvider.getSigner();

        try {
          // Try to get the current address to check if wallet is connected
          const address = await ethSigner.getAddress();
          console.log("Wallet already connected:", address);
          setProvider(ethProvider);
          setSigner(ethSigner);
          setWalletConnected(true); // Mark the wallet as connected
        } catch (err) {
          console.error("No wallet connected:", err);
          setWalletConnected(false); // No wallet connected
        }
      } else {
        alert("Please install MetaMask!");
      }
    };

    // Run wallet connection check when the component mounts
    checkWalletConnection();
  }, []);

  // Fetch products and orders after the wallet is connected
  useEffect(() => {
    if (walletConnected) {
      fetchProducts();
      fetchOrders();
    }
  }, [walletConnected]);

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg flex">
        {/* Left Side - Product List */}
        <div className="w-1/2 pr-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Available Products
          </h2>
          {products.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Product Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-t">
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">₹{product.price}</td>
                    <td className="px-4 py-2">{product.quantity}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => setSelectedProductId(product.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Select Product
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </div>

        {/* Right Side - Order Form */}
        <div className="w-1/2 pl-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Place Your Order
          </h2>

          {selectedProductId && (
            <div className="space-y-4">
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option
                  value=""
                  disabled>
                  Select Product
                </option>
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}>
                    {product.name} - ₹{product.price}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Delivery Address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={placeOrder}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Orders */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Orders</h3>
        {orders.length > 0 ? (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Order ID</th>
                <th className="px-4 py-2 border">Buyer</th>
                <th className="px-4 py-2 border">Product ID</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Total Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{order.id}</td>
                  <td className="px-4 py-2 border">{order.buyer}</td>
                  <td className="px-4 py-2 border">{order.productId}</td>
                  <td className="px-4 py-2 border">{order.quantity}</td>
                  <td className="px-4 py-2 border">{order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No orders yet.</p>
        )}
      </div>
    </div>
  );
}
