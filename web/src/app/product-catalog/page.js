"use client";

import { useState } from "react";

const ProductCatalog = () => {
  
  const initialProducts = [
    { id: 1, name: "Fertilizer", imageUrl: "https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp", price: 20, rating: 4, available: true, category: "Fertilizer" },
    { id: 2, name: "Pesticide", imageUrl: "https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp", price: 50, rating: 5, available: false, category: "Pesticide" },
    { id: 3, name: "Farm Machinery", imageUrl: "https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp", price: 30, rating: 3, available: true, category: "Farm Machinery" },
    { id: 4, name: "Seeds", imageUrl: "https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg", price: 25, rating: 4, available: true, category: "Seeds" },
    { id: 5, name: "Fertilizer", imageUrl: "https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp", price: 20, rating: 4, available: true, category: "Fertilizer" },
    { id: 6, name: "Pesticide", imageUrl: "https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp", price: 50, rating: 5, available: false, category: "Pesticide" },
    { id: 7, name: "Farm Machinery", imageUrl: "https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp", price: 30, rating: 3, available: true, category: "Farm Machinery" },
    { id: 8, name: "Seeds", imageUrl: "https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg", price: 25, rating: 4, available: true, category: "Seeds" },

  ];

  
  const categories = ["All", "Fertilizer", "Pesticide", "Farm Machinery", "Seeds",];

  
  const [products] = useState(initialProducts); 
  const [filteredProducts, setFilteredProducts] = useState(initialProducts); 

  
  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  
  const handleSearch = (searchTerm) => {
    setFilteredProducts(
      products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  
  const handleSort = (sortOption) => {
    const sortedProducts = [...filteredProducts];
    if (sortOption === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      sortedProducts.sort((a, b) => b.id - a.id);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="p-6 font-sans bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Product Catalog</h1>

     
      <div className="flex items-center gap-4 mb-6">
      
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-800">Your Shop</span>
        </div>

       
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-400 bg-light-gray"
        />

       
        <div>
          <h3 className="text-sm font-semibold mb-1 text-gray-800">Category</h3>
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md bg-light-gray text-gray-800"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

       
        <div>
          <h3 className="text-sm font-semibold mb-1 text-gray-800">Sort By</h3>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="p-2 border border-gray-300 rounded-md bg-light-gray text-gray-800"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-md p-4 text-center shadow-sm bg-light-gray"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h4 className="font-semibold text-gray-800">{product.name}</h4>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
            <p
              className={`font-semibold ${
                product.available ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.available ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
