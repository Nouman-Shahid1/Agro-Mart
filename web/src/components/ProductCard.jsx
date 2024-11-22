import React from 'react'

const ProductCard = ({src,title,avai,imageUrl,price,rating,cat}) => {
  return (
    <div className="w-full sm:w-[300px] text-center rounded-lg px-3 py-4 border border-gray-200 bg-white shadow-md">
    
    <div className="h-[200px] w-full">
      <img
        className="mx-auto mb-3 w-[90%] cursor-pointer rounded-lg h-[180px] object-cover"
        src={src}
        alt="Product"
      />
    </div>
    <p className="font-bold text-lg text-start pl-4">{title?title:'Product Title Here'}</p>
    <p className="text-gray-500 text-sm text-start pl-4">{cat?  cat:'Vegetable'}</p>
    <div className="flex items-center pl-4 ">
      {rating?'Rating':null}
      <span className="bg-yellow-400 text-white text-xs px-2 ml-1 py-0.5 rounded-md font-bold">
        {rating?rating:'4'}
      </span>
    </div>
    <p className="text-green-600 font-bold text-xl text-start pl-4">${price?price:'199.99'}</p>
    <button className="mt-3 w-[90%] mx-auto bg-green-600 text-white py-2 rounded-md hover:bg-green-700 flex items-center justify-center gap-2">
      Add to Cart
    </button>
  </div>
  
  )
}

export default ProductCard