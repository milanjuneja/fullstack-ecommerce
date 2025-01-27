import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerDashboard from '../seller/pages/SellerDashboard/SellerDashboard'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import Products from '../seller/pages/Products/Products'
import AddProduct from '../seller/pages/Products/AddProduct'
import Orders from '../seller/pages/Orders/Orders'
import Profile from '../seller/pages/Account/Profile'
import Payment from '../seller/pages/Payment/Payment'
import Transaction from '../seller/pages/Transaction/Transaction'

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  )
}

export default SellerRoutes
