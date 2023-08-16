import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductAPIs } from "../../../api/productApis";

const initialState = {
  isLoading: false,
  products: [],
  errors: {},
};

export const actFectchAllProduct = createAsyncThunk(
  "products/fetchAllTask",
  async () => {
    const { data } = await ProductAPIs.getAllProducts();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    actSetProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetProducts } = productSlice.actions;
export const productsReducer = productSlice.reducer;
