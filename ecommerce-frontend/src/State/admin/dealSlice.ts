import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DealsState } from "../../types/DealTypes";
import { api } from "../../config/api";

const initialState: DealsState = {
  dealCreated: false,
  deals: [],
  loading: false,
  error: null,
  dealUpdated: false,
};

export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const res = await api.post("/admin/deals", deal, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("created deal", res.data);
      return res.data;
    } catch (error) {
      console.log("error in createDeal", error);
      return rejectWithValue("not able to create deal");
    }
  }
);

export const getAllDeals = createAsyncThunk(
  "deals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/admin/deals", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("get all deals", res.data);
      return res.data;
    } catch (error) {
      console.log("error in getAllDeals", error);
      return rejectWithValue("not able to get deals");
    }
  }
);

const dealSlice = createSlice({
  name:'deal',
  initialState:initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDeals.fulfilled, (state, action) => {
        state.loading = true;
        state.deals = action.payload;
        state.dealCreated = true;
      })
      .addCase(getAllDeals.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload as string;
      })
  }
}); 

export default dealSlice.reducer;