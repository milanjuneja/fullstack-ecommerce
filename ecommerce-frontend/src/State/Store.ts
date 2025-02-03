import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice";
import couponSlice from "./customer/couponSlice";
import orderSlice from "./customer/orderSlice";
import wishlistSlice from "./customer/wishlistSlice";
import sellerOrderSlice from "./seller/sellerOrderslice";
import transactionSlice from "./seller/transactionSlice";

const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  coupon: couponSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  sellerOrder: sellerOrderSlice,
  transaction: transactionSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
