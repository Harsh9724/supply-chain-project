'use client';
import React, { useState, useEffect } from "react";

const Seller = () => {
  const [productDetails, setProductDetails] = useState({ pname: "", price: "", quantity: "" });
  const [registered, setRegistered] = useState(false);
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          setAccount(accounts[0]);
          checkRegistration(accounts[0]);
        })
        .catch(error => console.error("MetaMask access denied:", error));
    }
  }, []);

  const checkRegistration = async (account) => {
    try {
      const response = await fetch('/api/is-registered', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account })
      });
      const { isRegistered } = await response.json();
      setRegistered(isRegistered);
    } catch (error) {
      console.error("Error checking registration:", error);
    }
  };

  const registerAsSeller = async () => {
    try {
      const response = await fetch('/api/register-producer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: "Seller Name", account })
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registered as a seller!");
        setRegistered(true);
      } else {
        console.error("Error registering:", data.error);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const addProduct = async () => {
    const { pname, price, quantity } = productDetails;
    try {
      const response = await fetch('/api/add-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pname, price, quantity, account })
      });
      const data = await response.json();
      if (response.ok) {
        alert("Product added!");
        setProductDetails({ pname: "", price: "", quantity: "" });
      } else {
        console.error("Error adding product:", data.error);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Seller Dashboard</h1>
      {registered ? (
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Add Product</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={productDetails.pname}
              onChange={(e) => setProductDetails({ ...productDetails, pname: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={productDetails.price}
              onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={productDetails.quantity}
              onChange={(e) => setProductDetails({ ...productDetails, quantity: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
            onClick={addProduct}
          >
            Add Product
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
          onClick={registerAsSeller}
        >
          Register as Seller
        </button>
      )}
    </div>
  );
};

export default Seller;
