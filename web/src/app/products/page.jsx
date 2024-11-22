"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import React Icons
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons
import Newsletter from "@/components/Newsletter";

const ProductDetailsPage = () => {
  const [mainProduct, setMainProduct] = useState({
    id: 1,
    title: "Agricultural Farm Fertilizers",
    description: "Description for Product",
    price: "$99.99",
    originalPrice: "$129.99",
    availability: "In Stock",
    image: "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
  });

  const relatedProducts = [
    {
      id: 1,
      title: "Agricultural Farm Fertilizers",
      image: "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
      price: "$99.99",
      originalPrice: "$129.99",
      availability: "In Stock",
    },
    {
      id: 2,
      title: "Spray",
      image: "https://www.brightway.pk/cdn/shop/products/agricultural-knapsack-sprayer-500x500.jpg?v=1653640418",
      price: "$89.99",
      originalPrice: "$109.99",
      availability: "In Stock",
    },
    {
      id: 3,
      title: "Chemical Fertilizer",
      image: "https://image.made-in-china.com/226f3j00OQzvnPjrlKcB/EDDHA-Iron-Chemical-Fertilizer-EDTA-Fe6-for-Use-Agriculture.webp",
      price: "$79.99",
      originalPrice: "$99.99",
      availability: "Out of Stock",
    },
    {
      id: 4,
      title: "Farm Machinery",
      image: "https://s.alicdn.com/@sc04/kf/A8e696676c83e4e77a278e3f8dc35bc17Y.png_300x300.jpg",
      price: "$79.99",
      originalPrice: "$80.99",
      availability: "Out of Stock",
    },
    {
      id: 5,
      title: "Organic Fertilizer",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/428705477/CY/XU/IW/191577189/organic-fertilizer.webp",
      price: "$79.99",
      originalPrice: "$80.99",
      availability: "Out of Stock",
    },
  ];
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Excellent product! Works as expected and delivered on time.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review: "Good value for money. Would recommend to others.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 3,
      review: "The product is okay, but the packaging could be better.",
    },
  ];
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  
  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); 
  };

  const handleProductClick = (product) => {
    setMainProduct(product);
  };

  return (
    <>
      <Navbar bground={true} />

      <main className="bg-gray-100">
        <section className="w-full md:w-[80%] py-10 pb-10 mx-auto bg-white px-3 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/* Product Image */}
            <div className="relative border border-green-600 rounded-lg">
              <img
                src={mainProduct.image}
                alt={mainProduct.title}
                className="w-full h-[400px] object-contain mx-auto rounded-lg "
              />
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">{mainProduct.title}</h1>
              <div>
                <span>⭐⭐⭐⭐⭐</span>

              </div>
              <p className="text-lg text-gray-700">{mainProduct.description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-semibold text-green-600">{mainProduct.price}</span>
                <span className="text-lg text-gray-500 line-through">{mainProduct.originalPrice}</span>
              </div>
              <div className="flex items-center space-x-4 py-6">
                <button
                  onClick={handleDecrease}
                  className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition"
                  aria-label="Decrease Quantity"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold text-gray-800">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition"
                  aria-label="Increase Quantity"
                >
                  <FaPlus />
                </button>
              </div>
              <div>
                <p className={`${mainProduct.availability =="Out of Stock"? 'text-red-600': 'text-green-700'} text-xl font-bold `}>{mainProduct.availability}</p>
                
              </div>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-all duration-200">
                Add to Cart
              </button>

            </div>
          </div>
          <div className="my-10 bg-gray-50 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
            <div className="flex flex-col md:flex-row items-center space-x-2 mb-6">
              <p className="text-lg font-semibold text-gray-700">Reviews (100)</p>
              <div className="flex space-x-1 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              </div>
              <p className="text-gray-600">(4.5 Average Rating)</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 ">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white min-w-[300px] md:min-w-[400px] w-[400px] p-4 rounded-md shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-gray-800 font-semibold">{review.name}</p>
                    <div className="flex space-x-1 text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, index) =>
                          index < review.rating ? (
                            <FaStar key={index} />
                          ) : (
                            <FaRegStar key={index} />
                          )
                        )}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{review.review}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center min-w-[300px] w-[400px] md:w-full mx-auto">
              <textarea
                placeholder="Write your review..."
                rows="4"
                className=" w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button className="w-full mb-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-all duration-200">
                Submit Review
              </button>
            </div>
          </div>



          {/* Related Products */}
          <div className="mt-10 w-full text-center">
            <h2 className="text-4xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
