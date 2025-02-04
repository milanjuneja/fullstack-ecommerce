import { createAsyncThunk } from "@reduxjs/toolkit";
import { Coupon } from "../../types/CouponTypes";
import { api } from "../../config/api";

export const createCoupon = createAsyncThunk<
  Coupon,
  { coupon: any; jwt: string },
  { rejectValue: string }
>("coupon/createCoupon", async ({ coupon, jwt }, { rejectWithValue }) => {
  try {
    const res = await api.post("/api/coupons/create", coupon, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("create coupon", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in createCoupon", error);
    return rejectWithValue("cannot create coupon");
  }
});
