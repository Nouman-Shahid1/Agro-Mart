import React from 'react';

const Newsletter = () => {
  return (
    <div
  className="relative text-white  pt-12 pb-24 px-6 sm:px-12 z-0"
>
  <div className="absolute inset-0 bg-black bg-opacity-30 bg-blend-multiply bg-[url('https://images3.alphacoders.com/211/thumb-440-211667.webp')] bg-cover bg-top "></div>

  <div className="relative z-10 max-w-2xl mx-auto text-center md:mt-12">
    <h2 className="text-4xl font-bold mb-4">Stay Updated with Agriculture News</h2>
    <p className="text-lg font-bold mb-6">
      Subscribe to our newsletter for the latest updates, tips, and innovations in agriculture.
    </p>
    <form className="flex flex-col sm:flex-row gap-4 justify-center">
     
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 w-full sm:w-auto flex-1 text-green-900 rounded-md border-2  border-green-400  focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>

  );
};

export default Newsletter;