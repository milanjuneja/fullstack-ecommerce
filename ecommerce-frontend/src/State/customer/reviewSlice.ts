import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/ProductTypes";
import { User } from "../../types/userTypes";
import { api } from "../../config/api";



interface CreateReviewRequest {
  reviewText: string;
  reviewRating: number;
  productImages: string[];
}
export interface Review {
  reviewText: string;
  reviewRating: number;
  images: string[];
  product: Product;
  user: User;
  createdAt: Date;
}
interface ReviewState {
  review: Review | null;
  reviews: Review[];
  loading: boolean;
  error: string | null;
}
const initialState: ReviewState = {
  review: null,
  reviews: [],
  loading: false,
  error: null,
};

export const createReview = createAsyncThunk<
  Review,
  {
    jwt: string | null;
    request: CreateReviewRequest;
    productId: number;
  }
>(
  "reviews/createReview",
  async ({ jwt, productId, request }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/api/reviews/product/${productId}`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Review Created", res.data);
      return res.data;
    } catch (error) {
      console.log("Error in create review", error);
      return rejectWithValue("Failed to create review");
    }
  }
);

export const getReviewsByProductId = createAsyncThunk<
  Review[],
  {
    productId: number;
  }
>(
  "reviews/getReviewsByProductId",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const res = await api.get(`/api/reviews/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
      });
      console.log("Reviews by product Id", res.data);
      return res.data;
    } catch (error) {
      console.log("Error in getReviewsByProductId", error);
      return rejectWithValue("Failed to get review by Id");
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReview.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createReview.fulfilled, (state, action: PayloadAction<Review>) => {
      state.loading = false;
      state.review = action.payload;
      state.reviews.push(action.payload);
    });
    builder.addCase(createReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(getReviewsByProductId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getReviewsByProductId.fulfilled, (state, action: PayloadAction<Review[]>) => {
      state.loading = false;
      state.reviews = action.payload;
    })
    builder.addCase(getReviewsByProductId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    }); 
  },
});

export default reviewSlice.reducer;
