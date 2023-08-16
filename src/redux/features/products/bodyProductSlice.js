import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bodyProductAPIs } from "../../../api/bodyProducts";

const initialState = {
  isLoading: false,
  bodyProducts: [],
  errors: {},
};

export const actFectchAllBodyProduct = createAsyncThunk(
  "bodyProducts/fetchAllTask",
  async () => {
    const { data } = await bodyProductAPIs.getAllBodyProducts();
    return data;
  }
);

const bodyProductSlice = createSlice({
  name: "bodyProducts",
  initialState: initialState,
  reducers: {
    actSetBodyProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllBodyProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllBodyProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllBodyProduct.fulfilled, (state, action) => {
      state.bodyProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetBodyProducts } = bodyProductSlice.actions;
export const bodyProductsReducer = bodyProductSlice.reducer;
