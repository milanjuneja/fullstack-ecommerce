import React from 'react'

const DealCard = () => {
  return (
    <div>
      <div className='w-[12rem] cursor-pointer'>
        <img 
        className='border-x-[7px] border-t-[7px] border-pink-500 w-full h-[12rem] object-cover object-top'
        src="https://gourban.in/cdn/shop/files/Active02.png?v=1705563706&width=2048" alt="" />
        <div className='border-4 border-black bg-black p-2 text-white text-center'>
          <p className='text-lg font-semibold'>Smart Watch</p>
          <p className='text-2xl font-bold'>20% OFF</p>
          <p className='text-balance text-lg'>Shop now</p>
        </div>
      </div>
    </div>
  )
}

export default DealCard
