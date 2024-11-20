import React from 'react'

const ProductCard = ({src}) => {
  return (
    <>
        <div className="w-full sm:w-[280px] text-center rounded-lg px-2 py-3 border border-green-600 bg-green-30">
            <div className='h-[260px] w-full'>
            <img  className='mx-auto mb-3 w-[90%] cursor-pointer rounded-lg h-[250px]' src={src} alt="Product" />

            </div>
            <p className='font-bold text-lg text-start pl-4'>Product title</p>
            <p className='text-gray-700 text-lg text-start pl-4'>$200</p>
          </div>
    </>
  )
}

export default ProductCard