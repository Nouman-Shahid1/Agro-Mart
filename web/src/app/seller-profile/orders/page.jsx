'use client';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSellerOrders, fetchOrderDetail,updateOrderStatus } from "@/reducers/Order/orderSlice";
import Profile from "@/Components/ProfileCard/ProfileCard";

export default function Orders() {
  const dispatch = useDispatch();
  const { sellerOrders, loading, error } = useSelector((state) => state.orders);
  const userId = useSelector((state) => state.auth.user?.userId);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [products, setProducts] = useState({});

  // Fetch seller orders on component mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchSellerOrders(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = {};
      for (const order of sellerOrders) {
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

    if (sellerOrders.length > 0) fetchProductDetails();
  }, [sellerOrders, dispatch]);

  const handleViewDetails = (orderId) => {
    setSelectedOrder({
      ...sellerOrders.find((order) => order.id === orderId),
      Product: products[orderId],
    });
    setPopupVisible(true);
  };
  const handleUpdateStatus = async (orderId, newStatus) => {
    await dispatch(updateOrderStatus({ id: orderId, orderStatus: newStatus })); // ✅ Correct key "orderStatus"
    dispatch(fetchSellerOrders(userId));
    closePopup();
  };
  
  const closePopup = () => {
    setSelectedOrder(null);
    setPopupVisible(false);
  };

  return (
    <div
    className="relative h-screen overflow-auto p-4 px-4 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
    style={{
      backgroundImage:
        "url('https://png.pngtree.com/thumb_back/fh260/background/20241115/pngtree-happy-vietnamese-farmers-planting-rice-paddy-in-lush-green-field-image_16603887.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
     <div className="absolute inset-0 bg-black/50"></div>
     <div className="relative z-10">
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
        {sellerOrders.map((order) => (
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
            <select
                className="mt-2 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-green-700 transition shadow-md"
                onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                value={order.orderStatus}
              >
                <option value="Pending">Pending</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
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
  </div>
  );
}

