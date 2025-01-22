import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex flex-wrap justify-between lg:px-20 gap-5'>
      {[1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1].map(() => <ShopByCategoryCard />)}
      
    </div>
  )
}

export default ShopByCategory
