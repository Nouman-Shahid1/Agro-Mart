'use client '
import React from 'react'

const CategoryCard = ({name,src,description}) => {
    return (
        <div className='w-full sm:w-[280px] text-center rounded-lg px-2 py-3 border border-green-600 bg-green-30'>
            <p className='font-bold text-lg  pl-4'>{name}</p>
            <div className='h-[230px] w-[90%] mx-auto border-b border-[#017d29] flex items-center'>
                <img className='mx-auto mb-3 w-[80%] cursor-pointer rounded-lg h-[200px] ' src={src} alt="Product" />
            </div>
            <p className='text-gray-700 text-lg mt-2 pl-4'>{description}</p>
        </div>
    )
}

export default CategoryCard