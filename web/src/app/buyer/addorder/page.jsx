"use client";
import React, { useState, useEffect } from "react";
import ChatComponent from "@/Components/Chat/Chat";


const mockOrders = [
  {
    id: "12345",
    date: "2024-11-01",
    status: "Shipped",
    totalPrice: 120.0,
    items: [
      { id: "1", name: "Product A", quantity: 2, price: 30, image: "/product-a.jpg" },
      { id: "2", name: "Product B", quantity: 1, price: 60, image: "/product-b.jpg" },
    ],
    shippingAddress: "123 Main St, City, Country",
    paymentMethod: "Credit Card",
    trackingNumber: "XYZ123",
    estimatedDelivery: "2024-11-05",
  },
  {
    id: "12346",
    date: "2024-11-05",
    status: "Delivered",
    totalPrice: 250.0,
    items: [
      { id: "3", name: "Product C", quantity: 3, price: 50, image: "/product-c.jpg" },
    ],
    shippingAddress: "456 Another St, City, Country",
    paymentMethod: "PayPal",
    trackingNumber: null,
    estimatedDelivery: "2024-11-10",
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    
    setOrders(mockOrders);
  }, []);

  const handleReturnRequest = (orderId) => {
    alert(`Requesting return for order ${orderId}`);
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm(`Are you sure you want to delete order ${orderId}?`)) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
      alert(`Order ${orderId} has been deleted.`);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return; 
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "You", text: message }, 
    ]);
    setMessage(""); 
  };

  return (
    <div className="flex h-screen font-sans bg-gray-100">
     
      <aside className="w-80 h-full bg-green-900 text-white flex flex-col p-6 fixed left-0 top-0">
        <div className="text-2xl font-bold mb-6">
          <img src="/logo.png" alt="Logo" className="w-[220px] h-[90px] rounded-lg" />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-3">
            <li className="bg-green-700 rounded-lg p-3">Dashboard</li>
            <li className="p-3 rounded-lg hover:bg-green-700 cursor-pointer">
              Profile
            </li>
            <li className="p-3 rounded-lg hover:bg-green-700 cursor-pointer">
              Add Order
            </li>
          </ul>
        </nav>
        <button className="mt-auto bg-green-700 p-3 rounded-lg hover:bg-green-600">
          Log Out
        </button>
      </aside>

     
      <main className="flex-1 ml-80 p-6">
        <header className="flex justify-center items-center bg-green-700 h-[100px] w-full p-4 mb-6">
          <div className="text-2xl font-semibold text-white">Your Orders</div>
        </header>

        
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">
                  <strong>Date:</strong> {order.date}
                </p>
                <p className="text-gray-600">
                  <strong>Status:</strong> {order.status}
                </p>
                <p className="text-lg font-medium">
                  <strong>Total Price:</strong> ${order.totalPrice}
                </p>

               
                <div className="mt-4 flex flex-wrap gap-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg w-1/3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <p className="font-semibold">
                          {item.name} (x{item.quantity})
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

               
                <div className="mt-4 flex space-x-4">
                  
                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                  >
                    Delete Order
                  </button>
                  <button
                    onClick={() => handleViewOrder(order)}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

       
        {selectedOrder && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Order Details</h2>
            <p>
              <strong>Order ID:</strong> {selectedOrder.id}
            </p>
            <p>
              <strong>Date:</strong> {selectedOrder.date}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <p>
              <strong>Total Price:</strong> ${selectedOrder.totalPrice}
            </p>
            <p>
              <strong>Shipping Address:</strong> {selectedOrder.shippingAddress}
            </p>
            <p>
              <strong>Payment Method:</strong> {selectedOrder.paymentMethod}
            </p>
            {selectedOrder.trackingNumber && (
              <p>
                <strong>Tracking Number:</strong> {selectedOrder.trackingNumber}{" "}
                <a
                  href={`https://tracking.com/${selectedOrder.trackingNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Track
                </a>
              </p>
            )}
            <h3 className="text-xl font-semibold mt-4">Items</h3>
            {selectedOrder.items.map((item) => (
              <div key={item.id} className="flex space-x-4 mt-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <p>
                  {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

     
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        Chat
      </button>

    
      {isChatOpen && <ChatComponent />}

    </div>
  );
}
