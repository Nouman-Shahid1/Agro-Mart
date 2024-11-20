import React from 'react'

const ProductCard = () => {
  return (
    <>
        <div className="w-full sm:w-[250px] text-center rounded-lg px-2 py-3 border border-green-600 bg-green-30">
            <img width={'70%'} className='mx-auto mb-3' src="https://greenacresportsmed.com.au/wp-content/uploads/2018/01/dummy-image.jpg" alt="Product" />
            <p className='font-bold text-lg text-start pl-4'>Product title</p>
            <p className='text-gray-700 text-lg text-start pl-4'>$200</p>
          </div>
    </>
  )
}

export default ProductCard