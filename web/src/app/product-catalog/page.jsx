"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const ProductCatalog = ({ bground }) => {
  const initialProducts = [
    {
      id: 1,
      name: "Fertilizer",
      imageUrl:
        "https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp",
      price: 20,
      rating: 4,
      available: true,
      category: "Fertilizer",
    },
    {
      id: 2,
      name: "Pesticide",
      imageUrl:
        "https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp",
      price: 50,
      rating: 5,
      available: false,
      category: "Pesticide",
    },
    {
      id: 3,
      name: "Farm Machinery",
      imageUrl:
        "https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp",
      price: 30,
      rating: 3,
      available: true,
      category: "Farm Machinery",
    },
    {
      id: 4,
      name: "Seeds",
      imageUrl: "https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg",
      price: 25,
      rating: 4,
      available: true,
      category: "Seeds",
    },
    {
      id: 5,
      name: "Fertilizer",
      imageUrl:
        "https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp",
      price: 20,
      rating: 4,
      available: true,
      category: "Fertilizer",
    },
    {
      id: 6,
      name: "Pesticide",
      imageUrl:
        "https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp",
      price: 50,
      rating: 5,
      available: false,
      category: "Pesticide",
    },
    {
      id: 7,
      name: "Farm Machinery",
      imageUrl:
        "https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp",
      price: 30,
      rating: 3,
      available: true,
      category: "Farm Machinery",
    },
    {
      id: 8,
      name: "Seeds",
      imageUrl: "https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg",
      price: 25,
      rating: 4,
      available: true,
      category: "Seeds",
    },
    {
      id: 9,
      name: "Seeds",
      imageUrl: "https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg",
      price: 25,
      rating: 4,
      available: true,
      category: "Seeds",
    },
    {
      id: 10,
      name: "Fertilizer",
      imageUrl:
        "https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp",
      price: 20,
      rating: 4,
      available: true,
      category: "Fertilizer",
    },
    {
      id: 11,
      name: "Pesticide",
      imageUrl:
        "https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp",
      price: 50,
      rating: 5,
      available: false,
      category: "Pesticide",
    },
    {
      id: 12,
      name: "Farm Machinery",
      imageUrl:
        "https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp",
      price: 30,
      rating: 3,
      available: true,
      category: "Farm Machinery",
    },
    {
      id: 13,
      name: "Seeds",
      imageUrl: "https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg",
      price: 25,
      rating: 4,
      available: true,
      category: "Seeds",
    },
  ];

  const categories = [
    "All",
    "Fertilizer",
    "Pesticide",
    "Farm Machinery",
    "Seeds",
  ];

  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const handleSearch = (searchTerm) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
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
    <div>
      <Navbar bground={true} />
      <div className="bg-gray-100">
        <div className="p-6 pt-6 mx-auto font-sans bg-white text-gray-800">
          <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Product Catalog
            </h1>

            <div className="sm:p-6 bg-gray-50 flex flex-col md:flex-row shadow-lg rounded-lg w-full justify-between my-6  mx-auto space-y-4">
              <div className="flex  items-center mt-8 md:ml-3 w-[100%] md:w-[400px] lg:w-[500px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-700 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                  Search
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Categories</h3>
                  <select
                    onChange={(e) => handleFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Sort by Price</h3>
                  <select
                    onChange={(e) => handleSort(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  title={product.name}
                  src={product.imageUrl}
                  price={product.price}
                  rating={product.rating}
                  avai={product.available}
                  cat={product.category}
                />
              ))}
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default ProductCatalog;
