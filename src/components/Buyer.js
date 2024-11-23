"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Buyer = () => {
  const [products, setProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    pid: "",
    quantity: "",
    cname: "",
    caddress: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data: totalProduct } = await axios.get("/api/get-total-product");
      const productList = [];

      for (let i = 1; i <= totalProduct; i++) {
        const { data: product } = await axios.post("/api/get-product-by-id", {
          pid: i,
        });
        productList.push(product);
      }

      setProducts(productList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

const handleOrder = async () => {
  const { pid, quantity, cname, caddress } = orderDetails;

  try {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const response = await axios.post("/api/place-order", {
      pid: Number(pid),
      quantity: Number(quantity),
      cname,
      daddress: caddress,
      account, // Correctly send the account address from MetaMask
    });

    if (response.status === 200) {
      alert("Order placed successfully!");
      fetchProducts(); // Refresh products dynamically
      setOrderDetails({ pid: "", quantity: "", cname: "", caddress: "" });
    } else {
      console.error("Error placing order:", response.data.error);
    }
  } catch (error) {
    console.error("Error placing order:", error);
  }
};


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Buyer Dashboard</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <table className="w-full text-left table-auto border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.productName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.quantity}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                        onClick={() =>
                          setOrderDetails({ ...orderDetails, pid: product.id })
                        }>
                        Order
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="border border-gray-300 px-4 py-2 text-center"
                    colSpan="5">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Place an Order</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Product ID"
                value={orderDetails.pid}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, pid: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={orderDetails.quantity}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, quantity: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Customer Name"
                value={orderDetails.cname}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, cname: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Delivery Address"
                value={orderDetails.caddress}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, caddress: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
              onClick={handleOrder}>
              Submit Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Buyer;
