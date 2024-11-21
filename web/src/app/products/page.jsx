"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      description: "Description for Product",
      price: "$99.99",
      originalPrice: "$129.99",
      availability: "In Stock",
    },
    {
      id: 2,
      title: "Spray",
      image: "https://www.brightway.pk/cdn/shop/products/agricultural-knapsack-sprayer-500x500.jpg?v=1653640418",
      description: "Description for Product ",
      price: "$89.99",
      originalPrice: "$109.99",
      availability: "In Stock",
    },
    {
      id: 3,
      title: "chemical Fertilizer",
      image: "https://image.made-in-china.com/226f3j00OQzvnPjrlKcB/EDDHA-Iron-Chemical-Fertilizer-EDTA-Fe6-for-Use-Agriculture.webp",
      description: "Description for Product ",
      price: "$79.99",
      originalPrice: "$99.99",
      availability: "Out of Stock",
    },
    {
      id: 4,
      title: "Farm Machinery",
      image: "https://s.alicdn.com/@sc04/kf/A8e696676c83e4e77a278e3f8dc35bc17Y.png_300x300.jpg",
      description: "Description for Product .",
      price: "$79.99",
      originalPrice: "$80.99",
      availability: "Out of Stock",
    },
    {
      id: 5,
      title: "organic Fertilizer",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/428705477/CY/XU/IW/191577189/organic-fertilizer.webp",
      description: "Description for Product .",
      price: "$79.99",
      originalPrice: "$80.99",
      availability: "Out of Stock",
    },
    {
      id: 6,
      title: "Agricultural Farm Fertilizers",
      image: "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
      description: "Description for Product",
      price: "$99.99",
      originalPrice: "$129.99",
      availability: "In Stock",
    },
    {
      id: 7,
      title: "Spray",
      image: "https://www.brightway.pk/cdn/shop/products/agricultural-knapsack-sprayer-500x500.jpg?v=1653640418",
      description: "Description for Product ",
      price: "$89.99",
      originalPrice: "$109.99",
      availability: "In Stock",
    },
    {
      id: 8,
      title: "chemical Fertilizer",
      image: "https://image.made-in-china.com/226f3j00OQzvnPjrlKcB/EDDHA-Iron-Chemical-Fertilizer-EDTA-Fe6-for-Use-Agriculture.webp",
      description: "Description for Product ",
      price: "$79.99",
      originalPrice: "$99.99",
      availability: "Out of Stock",
    },
    {
      id: 9,
      title: "Farm Machinery",
      image: "https://s.alicdn.com/@sc04/kf/A8e696676c83e4e77a278e3f8dc35bc17Y.png_300x300.jpg",
      description: "Description for Product .",
      price: "$79.99",
      originalPrice: "$80.99",
      availability: "Out of Stock",
    },
    {
      id: 10,
      title: "organic Fertilizer",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/428705477/CY/XU/IW/191577189/organic-fertilizer.webp",
      description: "Description for Product .",
      price: "$79.99",
      originalPrice: "$80.99",
      availability: "Out of Stock",
    },
 
  ];

  
  const handleProductClick = (product) => {
    setMainProduct(product);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/green-field-with-sun_1160-878.jpg?t=st=1732204987~exp=1732208587~hmac=d8940e13307bb60f7a510add2523c88918be6e2e7af26dc809210abcccaa1278&w=740')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen"
    >
      
      <Navbar />

      
      <main className="pt-40 px-6">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow p-6">
          
          <section className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src={mainProduct.image}
                  alt={mainProduct.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

           
            <div className="flex-1">
              
              <h1 className="text-4xl font-bold mb-6">{mainProduct.title}</h1>

             
              <p className="text-gray-700 mb-6">{mainProduct.description}</p>

             
              <p className="text-2xl font-bold text-green-600 mb-2">
                {mainProduct.price}
              </p>
              <p className="text-sm text-gray-500 line-through">
                {mainProduct.originalPrice}
              </p>
              <p className="mb-6 font-semibold text-green-600">
                {mainProduct.availability}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <label htmlFor="quantity" className="font-semibold">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="border border-gray-300 rounded-md p-2 w-24"
                  defaultValue="1"
                  min="1"
                  max="10"
                />
              </div>

             
              <button className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </section>
        </div>

       
        <section className="mt-16 max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer p-4 bg-gray-200 rounded-lg text-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-full object-cover rounded-md mb-4"
                />
                <p className="font-semibold">{product.title}</p>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
        <br />
      </main>

      
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
