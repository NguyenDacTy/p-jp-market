import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newProductsAPIs } from "../../../api/newProducts";

const initialState = {
  isLoading: false,
  newProducts: [],
  errors: {},
};

export const actFectchAllNewProduct = createAsyncThunk(
  "newProducts/fetchAllTask",
  async () => {
    const { data } = await newProductsAPIs.getAllNewProducts();
    return data;
  }
);

const newProductSlice = createSlice({
  name: "newProducts",
  initialState: initialState,
  reducers: {
    actSetNewProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllNewProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllNewProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllNewProduct.fulfilled, (state, action) => {
      state.newProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetNewProducts, getAllNewProducts } =
  newProductSlice.actions;
export const newProductsReducer = newProductSlice.reducer;
