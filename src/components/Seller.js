"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { contract } from "../lib/ethers";

export default function Seller() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [walletConnected, setWalletConnected] = useState(false);

  // Check if wallet is already connected
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const ethProvider = new Web3Provider(window.ethereum);
        const ethSigner = ethProvider.getSigner();
        try {
          const address = await ethSigner.getAddress();
          setProvider(ethProvider);
          setSigner(ethSigner);
          setWalletConnected(true);
          console.log("Wallet connected:", address);
        } catch (err) {
          console.log("Wallet not connected");
        }
      }
    };
    checkWalletConnection();
  }, []);

  // Fetch products and orders after wallet is connected
  useEffect(() => {
    if (walletConnected) {
      fetchProducts();
      fetchOrders();
    }
  }, [walletConnected]);

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
        setWalletConnected(true);
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Add product to blockchain
  const addProduct = async () => {
    if (!signer) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const contractWithSigner = contract.connect(signer);

      // Call addProduct function from contract
      const transaction = await contractWithSigner.addProduct(
        name,
        price,
        quantity
      );
      console.log("Product added:", transaction);

      // After adding the product, fetch the updated product list
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // Fetch products from the contract
  const fetchProducts = async () => {
    try {
      const totalProducts = await contract.getAllProducts();
      console.log("Total products:", totalProducts);

      const productsList = [];
      for (let i = 1; i <= totalProducts.length; i++) {
        const product = await contract.products(i);
        productsList.push(product);
      }
      setProducts(productsList);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Fetch orders from the contract
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

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Seller Dashboard
        </h2>

        <div className="mb-8 flex justify-end items-center">
          {!walletConnected ? (
            <button
              onClick={connectWallet}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Connect Wallet
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-green-600 font-semibold">Wallet Connected</p>
            </div>
          )}
        </div>

        {/* Product Details and Add Product Form Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Added Products
            </h3>
            {products.length > 0 ? (
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Product Name</th>
                    <th className="px-4 py-2 border">Price (₹)</th>
                    <th className="px-4 py-2 border">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border">{product.name}</td>
                      <td className="px-4 py-2 border">{product.price}</td>
                      <td className="px-4 py-2 border">{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No products added yet.</p>
            )}
          </div>

          {/* Add Product Form */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Product
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="productName"
                  className="text-gray-700 font-semibold mb-1">
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  placeholder="Enter product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="productPrice"
                  className="text-gray-700 font-semibold mb-1">
                  Price (in Rupees)
                </label>
                <input
                  id="productPrice"
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="productQuantity"
                  className="text-gray-700 font-semibold mb-1">
                  Quantity
                </label>
                <input
                  id="productQuantity"
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={addProduct}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                Add Product
              </button>
            </div>
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
    </div>
  );
}
