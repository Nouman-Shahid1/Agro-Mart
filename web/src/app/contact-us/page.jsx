"use client";
import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bgCrops ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in touch <br />
          with us
        </h1>
      </div>
      <div className="w-full min-h-screen flex flex-col items-center pt-10 bg-gray-100 px-4">
        <div className="text-center w-full md:w-2/3 lg:w-1/2 mt-10 mb-16">
          <p className="text-lg md:text-xl text-gray-800">
            Please contact us using this form if you have any questions or
            comments about Agro Mart.
          </p>
        </div>

        <div className="w-full flex justify-center text-gray-600">
          <form
            method="post"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg"
          >
            <label htmlFor="name" className="font-bold">
              Name <span className="text-red-600 font-bold text-lg ">*</span>
            </label>
            <input
              className="w-full h-12 border p-4 rounded-md focus:ring focus:ring-green-300"
              type="text"
              name="Name"
              id="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email" className="font-bold">
              Email <span className="text-red-600 font-bold text-lg">*</span>
            </label>
            <input
              className="w-full h-12 border p-4 rounded-md focus:ring focus:ring-green-300"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />

            <label htmlFor="subject" className="font-bold">
              Subject <span className="text-red-600 font-bold text-lg">*</span>
            </label>
            <input
              className="w-full h-12 border p-4 rounded-md focus:ring focus:ring-green-300"
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              required
            />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="aboutme" className="font-bold">
                  I am <span className="text-red-600 font-bold text-lg">*</span>
                </label>
                <select
                  id="aboutme"
                  className="w-full border p-3 rounded-md text-gray-500 focus:ring-green-300"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="An agro buyer">An agro buyer</option>
                  <option value="An agro seller">An agro seller</option>
                  <option value="A Processor">A Processor</option>
                  <option value="A farmer">A farmer</option>
                  <option value="An Investor">An Investor</option>
                  <option value="A Manufacturer">A Manufacturer</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="interest" className="font-bold">
                  Interested in{" "}
                  <span className="text-red-600 font-bold text-lg">*</span>
                </label>
                <select
                  id="interest"
                  className="w-full border p-3 rounded-md text-gray-500 focus:ring-green-300"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="information">Information</option>
                  <option value="data">Data</option>
                  <option value="Projects">Projects</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <label htmlFor="message" className="font-bold">
              Message <span className="text-red-600 font-bold text-lg">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full h-28 border p-4 rounded-md focus:ring focus:ring-green-300"
              placeholder="Enter your query"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-500 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 px-4">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Green Agro Mart, we value your feedback and are here to assist you
          with any questions or concerns you may have. Whether you need support
          with our products, have inquiries about your orders, or simply want to
          share your thoughts, please don’t hesitate to reach out to us.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-around mt-10 gap-6 text-center mb-10">
        <div className="p-4">
          <h2 className="text-green-700 font-bold text-xl underline">PHONE</h2>
          <p className="text-gray-600">+123-456-7890</p>
        </div>
        <div className="p-4">
          <h2 className="text-green-700 font-bold text-xl underline">EMAIL</h2>
          <p className="text-gray-600">info@agriculture.com</p>
        </div>
        <div className="p-4">
          <h2 className="text-green-700 font-bold text-xl underline">
            ADDRESS
          </h2>
          <p className="text-gray-600">123 Green Field, Agriculture City</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
