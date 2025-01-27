"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, fetchOrderDetail } from "@/reducers/Order/orderSlice";
import Profile from "@/Components/ProfileCard/ProfileCard";

export default function Home() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [products, setProducts] = useState({}); // Store product data for each order

  // Fetch orders on component mount
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // Fetch product details for all orders
  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = {};
      for (const order of orders) {
        try {
          const response = await dispatch(fetchOrderDetail(order.id));
          if (response.meta.requestStatus === "fulfilled") {
            productData[order.id] = response.payload.Product;
          }
        } catch (error) {
          console.error("Failed to fetch product details:", error);
        }
      }
      setProducts(productData);
    };

    if (orders.length > 0) fetchProductDetails();
  }, [orders, dispatch]);

  const handleViewDetails = (orderId) => {
    setSelectedOrder({
      ...orders.find((order) => order.id === orderId),
      Product: products[orderId],
    });
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedOrder(null);
    setPopupVisible(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 min-h-screen p-6 text-white">
      <Profile />

      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-lime-100 mb-6">My Orders</h2>
      </div>

      {/* Order Cards */}
      {loading ? (
        <p className="text-center text-lime-200">Loading orders...</p>
      ) : error ? (
        <p className="text-center text-red-400">Failed to load orders: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gradient-to-br from-green-700 via-emerald-600 to-lime-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={`http://localhost:8080/${products[order.id]?.imagepath || "static/images/placeholder.jpg"}`}
                alt={products[order.id]?.name || "Product Image"}
                className="w-full h-40 rounded-lg object-cover mb-4"
              />
              <h3 className="text-lime-100 text-lg font-bold mb-2">
                Order #{order.id} - {order.name}
              </h3>
              <p className="text-lime-200 text-sm mb-2">
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={
                    order.orderStatus === "Pending"
                      ? "text-yellow-400"
                      : "text-lime-300"
                  }
                >
                  {order.orderStatus}
                </span>
              </p>
              <p className="text-lime-200 text-sm mb-2">
                <span className="font-medium">Total Price:</span> $
                {order.checkoutPrice}
              </p>
              <p className="text-lime-200 text-sm mb-2">
                <span className="font-medium">Shipping Address:</span>{" "}
                {order.shippingAddress}, {order.city}, {order.state}, {order.country}
              </p>
              <button
                className="mt-4 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
                onClick={() => handleViewDetails(order.id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Popup for Order Details */}
      {isPopupVisible && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 rounded-lg shadow-2xl p-6 max-w-md w-full text-white relative">
            <button
              className="absolute top-3 right-3 text-lime-100 hover:text-white"
              onClick={closePopup}
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>
            <p className="text-sm mb-2">
              <span className="font-medium">Order ID:</span> {selectedOrder.id}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Name:</span> {selectedOrder.name}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Email:</span> {selectedOrder.email}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Phone:</span> {selectedOrder.phoneNumber}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Shipping Address:</span>{" "}
              {selectedOrder.shippingAddress}, {selectedOrder.city}, {selectedOrder.state},{" "}
              {selectedOrder.country}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Payment Method:</span>{" "}
              {selectedOrder.paymentMethod}
            </p>
            <p className="text-sm mb-6">
              <span className="font-medium">Product Name:</span>{" "}
              {selectedOrder.Product?.name || "N/A"}
            </p>
            <img
              src={`http://localhost:8080/${selectedOrder.Product?.imagepath || "static/images/placeholder.jpg"}`}
              alt={selectedOrder.Product?.name || "Product Image"}
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <button
              className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
