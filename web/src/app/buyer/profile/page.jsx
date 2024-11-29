"use client";
import React, { useState } from "react";

export default function CombinedDashboard() {
  const [bg, setBg] = useState(false); 
  const [activeSection, setActiveSection] = useState("dashboard"); 
  const [formData, setFormData] = useState({
    fullName: "",
    profilePicture: null,
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    paymentMethods: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        notifications: { ...prev.notifications, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form data submitted:", formData);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex h-screen font-sans bg-gray-100 bg-cover bg-center">
     
      <aside className="w-80 bg-green-900 text-white flex flex-col p-6 h-full">
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
            <li
              onClick={() => handleSectionChange("dashboard")}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeSection === "dashboard"
                  ? "bg-green-700 text-white"
                  : "hover:bg-green-700"
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => handleSectionChange("profile")}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeSection === "profile"
                  ? "bg-green-700 text-white"
                  : "hover:bg-green-700"
              }`}
            >
              Profile
            </li>
            <li
              onClick={() => handleSectionChange("addOrder")}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeSection === "addOrder"
                  ? "bg-green-700 text-white"
                  : "hover:bg-green-700"
              }`}
            >
              Add Order
            </li>
          </ul>
        </nav>
        <button className="mt-auto bg-green-700 p-3 rounded-lg hover:bg-green-600">
          Log Out
        </button>
      </aside>

      
      <main className="flex-1 p-6 h-full overflow-auto">
        <header className="flex justify-center items-center bg-green-700 h-[100px] w-full p-4">
          <div className="flex justify-between items-center w-full max-w-screen-lg">
            <h1 className="text-2xl font-semibold text-white">Create Your Profile</h1>
            <div className="flex items-center space-x-3">
             
              <div>
                <img
                  src={
                    formData.profilePicture
                      ? URL.createObjectURL(formData.profilePicture) 
                      : "/placeholder-profile.png"
                  }
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
              </div>
              
              <div>
                <p className="text-sm font-medium text-white">
                  {formData.fullName}
                </p>
              </div>
            </div>
          </div>
        </header>

        
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Buyer Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
           
            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-700">
                Personal Information
              </legend>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Profile Picture
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, profilePicture: e.target.files[0] })
                  }
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
            </fieldset>

          
            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-700">
                Location Information
              </legend>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
            </fieldset>

            
            <fieldset className="space-y-6">
  <legend className="text-xl font-semibold text-gray-800">
    Preferences
  </legend>
  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
    <label className="block text-sm font-medium text-gray-700">
      Preferred Payment Method
    </label>
    <div className="mt-2 space-y-4">
      <div className="flex items-center">
        <input
          type="radio"
          name="paymentMethods"
          value="PayPal"
          checked={formData.paymentMethods === "PayPal"}
          onChange={handleChange}
          className="h-4 w-4 text-green-600 focus:ring-green-500"
        />
        <label className="ml-2 text-gray-700">PayPal</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          name="paymentMethods"
          value="Credit Card"
          checked={formData.paymentMethods === "Credit Card"}
          onChange={handleChange}
          className="h-4 w-4 text-green-600 focus:ring-green-500"
        />
        <label className="ml-2 text-gray-700">Credit Card</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          name="paymentMethods"
          value="Bank Transfer"
          checked={formData.paymentMethods === "Bank Transfer"}
          onChange={handleChange}
          className="h-4 w-4 text-green-600 focus:ring-green-500"
        />
        <label className="ml-2 text-gray-700">Bank Transfer</label>
      </div>
    </div>
  </div>
</fieldset>


            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
