import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allProductAPIs } from "../../../api/allProducts";

const initialState = {
  isLoading: false,
  allProducts: [],
  errors: {},
};

export const actFectchAllAllProduct = createAsyncThunk(
  "allProducts/fetchAllTask",
  async () => {
    const { data } = await allProductAPIs.getAllAllProducts();
    return data;
  }
);

const allProductSlice = createSlice({
  name: "allProducts",
  initialState: initialState,
  reducers: {
    actSetAllProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllAllProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllAllProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllAllProduct.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetAllProducts } = allProductSlice.actions;
export const allProductsReducer = allProductSlice.reducer;
