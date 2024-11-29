import React from 'react';
import Layout from '../Layout';

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Settings Header */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Update Your Settings</h2>
          <p className="mt-2 text-lg text-gray-600">
            Update your profile information, password, and preferences here.
          </p>
        </div>

        {/* Settings Form */}
        <form className="bg-white shadow-xl rounded-lg p-8 space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter your new password"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Confirm your new password"
            />
          </div>

          {/* Profile Picture Upload */}
          <div className="space-y-2">
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
    </Layout>
  );
};

export default Settings;
