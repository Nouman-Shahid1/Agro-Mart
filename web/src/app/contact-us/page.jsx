"use client";
import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div
        style={{
          backgroundImage: `url('https://landema.com/bootstrap-theme/images/contact-bg.e6a96d47.png')`,
          minHeight: "550px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        className="text-white flex items-center justify-center h-screen sm:bg-[left] md:bg-[center] lg:bg-[left]"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          style={{ marginTop: "100px", position: "relative", zIndex: 2 }}
        >
          Get in touch <br />
          with us
        </h1>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center pt-10absolute inset-0 bg-gradient-to-b from-green-900 via-green-700 to-transparent opacity-90 px-4">
        <div className="text-center w-full md:w-2/3 lg:w-1/2 mt-8 mb-16">
        <br />
          <p className="text-xl font-bold md:text-xl text-white mt-8 ">
            Please contact us using this form if you have any questions or
            comments about Agro Mart.
          </p>
        </div>
    
      <div className="w-full flex flex-col lg:flex-row items-start justify-center pt-10 px-4">
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <form
            method="post"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-11/12 flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg"
          >
            <label htmlFor="name" className="font-bold">
              Name <span className="text-red-600 font-bold text-lg">*</span>
            </label>
            <input
              className="w-full h-12 border p-4 rounded-md "
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
              className="w-full h-12 border p-4 rounded-md "
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
              className="w-full h-12 border p-4 rounded-md "
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
                  className="w-full border p-3 rounded-md text-gray-500 "
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
                  className="w-full border p-3 rounded-md text-gray-500 "
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
              className="w-full h-28 border p-4 rounded-md "
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
        <div className="w-full lg:w-1/2 p-4">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509586!2d-122.42189568468104!3d37.77492967975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858103c8f9c7c5%3A0x59d7d8d5635a5ba9!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1698313779029!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg border"
          ></iframe>
        </div>
      </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default ContactUs;
