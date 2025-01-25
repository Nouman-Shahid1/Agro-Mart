// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchOrders } from "@/reducers/Order/orderSlice";
// import Profile from "@/Components/ProfileCard/ProfileCard";

// export default function Home() {
//   const dispatch = useDispatch();
//   const { orders, loading, error } = useSelector((state) => state.orders); // Access orders state
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isChatVisible, setChatVisible] = useState(false);

//   // Fetch orders on component mount
//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   const handleFilter = (status) => {
//     setFilterStatus(status);
//   };

//   const handleViewDetails = (order) => {
//     setSelectedOrder(order);
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setSelectedOrder(null);
//     setPopupVisible(false);
//   };

//   const openChat = () => {
//     setChatVisible(true);
//   };

//   const closeChat = () => {
//     setChatVisible(false);
//   };

//   const filteredOrders =
//     filterStatus === "All"
//       ? orders
//       : orders.filter((order) =>
//           filterStatus === "To Receive"
//             ? order.status === "Shipped"
//             : order.status === "Pending"
//         );

//   return (
//     <div className="bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 min-h-screen p-6 text-white">
//       <Profile />

//       <div className="text-center mt-8">
//         <h2 className="text-3xl font-bold text-lime-100 mb-6">My Orders</h2>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-6 mb-8">
//         {["All", "To Ship", "To Receive"].map((status) => (
//           <button
//             key={status}
//             className={`px-6 py-3 rounded-full font-semibold ${
//               filterStatus === status
//                 ? "bg-lime-600 text-white shadow-lg"
//                 : "bg-green-500 text-lime-100 hover:bg-green-600"
//             } transition`}
//             onClick={() => handleFilter(status)}
//           >
//             {status}
//           </button>
//         ))}
//       </div>

//       {/* Order Cards */}
//       {loading ? (
//         <p className="text-center text-lime-200">Loading orders...</p>
//       ) : error ? (
//         <p className="text-center text-red-400">Failed to load orders: {error}</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredOrders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-gradient-to-br from-green-700 via-emerald-600 to-lime-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={order.image}
//                 alt={order.title}
//                 className="w-full h-40 rounded-lg object-cover mb-4"
//               />
//               <h3 className="text-lime-100 text-lg font-bold mb-2">
//                 {order.id} - {order.title}
//               </h3>
//               <p className="text-lime-200 text-sm mb-2">
//                 <span className="font-medium">Status:</span>{" "}
//                 <span
//                   className={
//                     order.status === "Pending"
//                       ? "text-yellow-400"
//                       : "text-lime-300"
//                   }
//                 >
//                   {order.status}
//                 </span>
//               </p>
//               <p className="text-lime-200 text-sm mb-2">
//                 <span className="font-medium">Total Price:</span> $
//                 {order.price}
//               </p>
//               <button
//                 className="mt-4 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
//                 onClick={() => handleViewDetails(order)}
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Popup for Order Details */}
//       {isPopupVisible && selectedOrder && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 rounded-lg shadow-2xl p-6 max-w-md w-full text-white relative">
//             <button
//               className="absolute top-3 right-3 text-lime-100 hover:text-white"
//               onClick={closePopup}
//             >
//               Close
//             </button>
//             <h2 className="text-2xl font-bold mb-6">Order Details</h2>
//             <p className="text-sm mb-2">
//               <span className="font-medium">Order ID:</span> {selectedOrder.id}
//             </p>
//             <p className="text-sm mb-2">
//               <span className="font-medium">User Email:</span>{" "}
//               {selectedOrder.email}
//             </p>
//             <p className="text-sm mb-2">
//               <span className="font-medium">Total Price:</span> $
//               {selectedOrder.price}
//             </p>
//             <p className="text-sm mb-6">
//               <span className="font-medium">Status:</span>{" "}
//               <span
//                 className={
//                   selectedOrder.status === "Pending"
//                     ? "text-yellow-400"
//                     : "text-lime-300"
//                 }
//               >
//                 {selectedOrder.status}
//               </span>
//             </p>
//             <button
//               className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md mb-4"
//               onClick={openChat}
//             >
//               Do you want to chat with seller?
//             </button>
//             <button
//               className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
//               onClick={closePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Chat Popup */}
//       {isChatVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-gradient-to-br from-green-600 to-lime-500 rounded-lg shadow-2xl p-6 max-w-lg w-full text-white relative">
//             <button
//               className="absolute top-3 right-3 text-lime-100 hover:text-white"
//               onClick={closeChat}
//             >
//               Close
//             </button>
//             <h2 className="text-2xl font-bold mb-4">Chat with Seller</h2>
//             <div className="h-64 bg-green-800 rounded-md p-4 overflow-y-auto">
//               {/* Placeholder for chat messages */}
//               <p className="text-gray-300">Chat messages go here...</p>
//             </div>
//             <input
//               type="text"
//               placeholder="Type your message..."
//               className="w-full mt-4 p-3 rounded-md text-gray-800"
//             />
//             <button className="mt-2 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md">
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "@/reducers/Order/orderSlice";
import Profile from "@/Components/ProfileCard/ProfileCard";

export default function Home() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders); // Access orders state
  const [filterStatus, setFilterStatus] = useState("All");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fetch orders on component mount
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedOrder(null);
    setPopupVisible(false);
  };

  const filteredOrders =
    filterStatus === "All"
      ? orders
      : orders.filter((order) =>
          filterStatus === "To Receive"
            ? order.orderStatus === "Shipped"
            : order.orderStatus === "Pending"
        );

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 min-h-screen p-6 text-white">
      <Profile />

      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-lime-100 mb-6">My Orders</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        {["All", "To Ship", "To Receive"].map((status) => (
          <button
            key={status}
            className={`px-6 py-3 rounded-full font-semibold ${
              filterStatus === status
                ? "bg-lime-600 text-white shadow-lg"
                : "bg-green-500 text-lime-100 hover:bg-green-600"
            } transition`}
            onClick={() => handleFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Order Cards */}
      {loading ? (
        <p className="text-center text-lime-200">Loading orders...</p>
      ) : error ? (
        <p className="text-center text-red-400">Failed to load orders: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gradient-to-br from-green-700 via-emerald-600 to-lime-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
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
                {order.shippingAddress}, {order.city}, {order.state},{" "}
                {order.country}
              </p>
              <button
                className="mt-4 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
                onClick={() => handleViewDetails(order)}
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
              <span className="font-medium">Phone:</span>{" "}
              {selectedOrder.phoneNumber}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Shipping Address:</span>{" "}
              {selectedOrder.shippingAddress}, {selectedOrder.city},{" "}
              {selectedOrder.state}, {selectedOrder.country}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Payment Method:</span>{" "}
              {selectedOrder.paymentMethod}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Total Price:</span> $
              {selectedOrder.checkoutPrice}
            </p>
            <p className="text-sm mb-6">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={
                  selectedOrder.orderStatus === "Pending"
                    ? "text-yellow-400"
                    : "text-lime-300"
                }
              >
                {selectedOrder.orderStatus}
              </span>
            </p>
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
