import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className='flex items-center gap-5'>
        <div className=''>
          <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className='font-bold text-primary-color'>PENDING</h1>
          <p>Arriving By Mon, 15 Jan</p>
        </div>
      </div>
      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img
          className='w-[70px]'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviH8Xx67eafq--Eq0txnGOhqpa2CSw0i07A&s" alt="" />
        </div>
        <div className='w-full space-y2'>
          <h1>Clothing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam fugit vel corporis hic id dolorem. Quas, nulla earum atque maiores blanditiis porro itaque quidem hic rerum cumque. Deserunt, aliquid.</p>
          <p>
            <strong>size: </strong>
            FREE
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default OrderItem
