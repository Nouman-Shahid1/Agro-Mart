"use client";
import React, { useState, useMemo } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { FaPlus, FaMinus, FaStar } from "react-icons/fa";
import Newsletter from "@/Components/NewsLetter/Newsletter";

const ProductDetailsPage = () => {
  const [mainProduct, setMainProduct] = useState({
    id: 1,
    title: "Agricultural Farm Fertilizers",
    description:
      "Enhance your farm's productivity with premium-grade agricultural fertilizers designed for modern farming.",
    price: "$99.99",
    originalPrice: "$129.99",
    availability: "In Stock",
    image: "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
  });

  const relatedProducts = [
    {
      id: 1,
      title: "Agricultural Farm Fertilizers",
      image:
        "https://www.foodicine.co.in/img/products/humic-acid-fertilizer.jpg",
      price: "$99.99",
    },
    {
      id: 2,
      title: "Spray",
      image:
        "https://www.brightway.pk/cdn/shop/products/agricultural-knapsack-sprayer-500x500.jpg?v=1653640418",
      price: "$89.99",
    },
  ];

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Excellent product! Works as expected.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review: "Good quality but could be cheaper.",
    },
  ]);

  const [newReview, setNewReview] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  // Calculate the average rating
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  }, [reviews]);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleAddReview = () => {
    if (newReview.trim() === "" || selectedRating === 0) {
      alert("Please provide a comment and a rating.");
      return;
    }

    const review = {
      id: reviews.length + 1,
      name: "Anonymous",
      rating: selectedRating,
      review: newReview,
    };

    setReviews([...reviews, review]);
    setNewReview("");
    setSelectedRating(0);
  };

  return (
    <>
      <Navbar bground={true} />
      <main className="relative bg-gradient-to-br from-lime-200 via-lime-600 to-green-500 py-10 -z-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-400 opacity-20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-lime-500 opacity-20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px] bg-green-200 opacity-30 rounded-full blur-[200px]"></div>
        <section className="container mx-auto px-6">
          {/* Main Product Section */}
          <div className="container mx-auto mt-28 p-10 bg-gradient-to-r from-green-100 to-white shadow-2xl rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
              {/* Product Image Section */}
              <div className="flex justify-center items-center">
                <div className="group">
                  <img
                    src={mainProduct.image}
                    alt={mainProduct.title}
                    className="w-[90%] max-h-[500px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Information Section */}
              <div className="flex flex-col justify-between space-y-10 p-6">
                {/* Title and Rating */}
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    {mainProduct.title}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.round(averageRating) ? "" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg">
                      {averageRating} ({reviews.length} reviews)
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
                  {mainProduct.description}
                </p>

                {/* Price and Discount */}
                <div className="flex items-center space-x-6">
                  <span className="text-5xl font-extrabold text-green-600">
                    {mainProduct.price}
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    {mainProduct.originalPrice}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-4">
                    <button
                      className="p-4 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-shadow shadow-md"
                      onClick={() =>
                        setMainProduct((prev) => ({
                          ...prev,
                          quantity: Math.max((prev.quantity || 1) - 1, 1),
                        }))
                      }
                    >
                      <FaMinus />
                    </button>
                    <span className="text-2xl font-bold">
                      {mainProduct.quantity || 1}
                    </span>
                    <button
                      className="p-4 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-shadow shadow-md"
                      onClick={() =>
                        setMainProduct((prev) => ({
                          ...prev,
                          quantity: (prev.quantity || 1) + 1,
                        }))
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                {/* Availability */}
                <p
                  className={`${
                    mainProduct.availability === "Out of Stock"
                      ? "text-red-600"
                      : "text-green-600"
                  } text-xl font-semibold`}
                >
                  {mainProduct.availability}
                </p>

                {/* Add to Cart Button */}
                <button className="w-full py-4 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-green-700 shadow-xl hover:shadow-green-500/50 transition-transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
                >
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-gray-600 text-sm">{review.review}</p>
                  </div>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add Review Section */}
          <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Write a Review</h3>
            <div className="flex space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${
                    star <= selectedRating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRatingClick(star)}
                />
              ))}
            </div>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review..."
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <button
              onClick={handleAddReview}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Submit Review
            </button>
          </section>

          {/* Related Products Section */}
          <section className="mt-10">
            <h2 className="text-4xl font-bold text-center mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-green-600 font-semibold">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
