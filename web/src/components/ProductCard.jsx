import React from 'react'

const ProductCard = ({src}) => {
  return (
    <div className="w-full sm:w-[300px] text-center rounded-lg px-3 py-4 border border-gray-200 bg-white shadow-md">
    {/* Product Image */}
    <div className="h-[260px] w-full">
      <img
        className="mx-auto mb-3 w-[90%] cursor-pointer rounded-lg h-[250px] object-cover"
        src={src}
        alt="Product"
      />
    </div>
  
    {/* Product Title */}
    <p className="font-bold text-lg text-start pl-4">Product Title Here</p>
  
    {/* Product Category */}
    <p className="text-gray-500 text-sm text-start pl-4">Vegetable</p>
  
    {/* Rating Section */}
    <div className="flex items-center pl-4 my-2">
      <span className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-md font-bold">
        4.0
      </span>
    </div>
  
    {/* Product Price */}
    <p className="text-green-600 font-bold text-xl text-start pl-4">$49</p>
  
    {/* Add to Cart Button */}
    <button className="mt-3 w-[90%] mx-auto bg-green-600 text-white py-2 rounded-md hover:bg-green-700 flex items-center justify-center gap-2">
      Add to Cart
    </button>
  </div>
  
  )
}

export default ProductCard