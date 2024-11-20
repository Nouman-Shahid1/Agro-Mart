import React from 'react';

const Newsletter = () => {
  return (
    <div
      className="relative text-white py-12 px-6 sm:px-12 z-0"
      
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated with Agriculture News</h2>
        <p className="text-lg mb-6">
          Subscribe to our newsletter for the latest updates, tips, and innovations in agriculture.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full sm:w-auto flex-1 text-black rounded-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
