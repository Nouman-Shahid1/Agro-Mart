import ProductTable from '@/Components/CategoryTable/ProductTable';
import Profile from '@/Components/ProfileCard/ProfileCard';
import React from 'react'

const Seeds = () => {
  return (
    <div
    className="p-2 md:p-8 min-h-screen">
<Profile/>
      <div className='z-20'>
    <ProductTable name="Seeds" seed={true}/>      

    </div>
    </div>
  )
}

export default Seeds;