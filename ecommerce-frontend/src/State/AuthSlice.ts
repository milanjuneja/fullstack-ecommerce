import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/send/login-signup-otp", { email });
      console.log("login otp response", res);
    } catch (error) {
      console.log("error------", error);
    }
  }
);

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const res = await api.post("/sellers/login", loginRequest );
      console.log("login otp response", res.data);
    } catch (error) {
      console.log("error------", error);
    }
  }
);

export const logout = createAsyncThunk<any, any>("/auth/logout", async(navigate, {rejectWithValue}) => {
  try {
    localStorage.clear();
    navigate("/")
  } catch (error) {
    
  }
})
