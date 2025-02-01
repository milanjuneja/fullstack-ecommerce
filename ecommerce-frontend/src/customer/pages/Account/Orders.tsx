import React, { useEffect } from 'react'
import OrderItem from './OrderItemCard'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { fetchUserOrderHistory } from '../../../State/customer/orderSlice';
import OrderItemCard from './OrderItemCard';

const Orders = () => {
  const dispath = useAppDispatch();
  const {order} = useAppSelector(store=>store)
  useEffect(()=> {
   dispath(fetchUserOrderHistory(localStorage.getItem('jwt') || "")) 
  },[])
  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'>All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className='space-y-2'>
        {order.orders.map((order)=>order.orderItems.map((item) => <OrderItemCard order={order} item={item} />))}
      </div>
    </div>
  )
}

export default Orders
