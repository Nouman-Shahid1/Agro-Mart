"use client";
import { useState } from "react";

export default function SellerDashboard() {
  const [bg, setBg] = useState(false); 

  const handleDelete = (id) => {
    
    console.log("Deleted category with id:", id);
  };

  return (
    <div
      className="flex h-screen font-sans bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('')" }} 
    >
      
      <aside className="w-80 bg-green-900 text-white flex flex-col p-6">
        <div className="flex items-center text-2xl font-bold mb-6">
          <img
            src="/logo.png"
            alt="Logo"
            className={`w-[220px] h-[90px] transition-all duration-300 ease-in-out drop-shadow-md ${
              bg
                ? "hover:drop-shadow-[0_4px_20px_rgba(76,175,80,1)]"
                : "hover:drop-shadow-[0px_4px_20px_rgba(255,255,255,1)]"
            } rounded-lg`}
          />
        </div>

        <nav className="flex-grow">
          <ul className="space-y-3">
            <li className="bg-green-700 rounded-lg p-3">Dashboard</li>
            <li className="p-3 rounded-lg hover:bg-green-700 cursor-pointer transition-colors duration-300">
              Profile
            </li>
            <li className="p-3 rounded-lg hover:bg-green-700 cursor-pointer transition-colors duration-300">
              Add Order
            </li>
          </ul>
        </nav>
        <button className="mt-auto bg-green-700 p-3 rounded-lg hover:bg-green-600">
          Log Out
        </button>
      </aside>

      
      <main className="flex-1 p-6">
        <header className="flex justify-center items-center bg-green-700 h-[100px] w-full p-4">
          <div className="flex justify-between items-center w-full max-w-screen-lg">
            <h1 className="text-2xl font-semibold text-white">Welcome!</h1>
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm font-medium text-white">Admin</p>
                <p className="text-xs text-gray-300">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
 
  <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between w-full max-w-sm h-40 sm:h-48 lg:h-56 transition-transform transform hover:scale-105 hover:shadow-xl">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Profile</h3>
      <p className="text-sm text-gray-600 mt-2">Manage your profile and account settings</p>
    </div>
    {/* <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl">
      👤
    </div> */}
  </div>

 
  <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between w-full max-w-sm h-40 sm:h-48 lg:h-56 transition-transform transform hover:scale-105 hover:shadow-xl">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Add Order</h3>
      <p className="text-sm text-gray-600 mt-2">Add new orders to your system</p>
    </div>
    {/* <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl">
      ➕
    </div> */}
  </div>

  
</div>

        
      </main>
    </div>
  );
}
