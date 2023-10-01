import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { heartProductAPIs } from "../../../api/heartProducts";

const initialState = {
  isLoading: false,
  heartProducts: [],
  errors: {},
};

export const actFectchAllHeartProduct = createAsyncThunk(
  "heartProducts/fetchAllTask",
  async (keySearch) => {
    const { data } = await heartProductAPIs.getAllHeartProducts(keySearch);
    return data;
  }
);

const heartProductSlice = createSlice({
  name: "heartProducts",
  initialState: initialState,
  reducers: {
    actSetHeartProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllHeartProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllHeartProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllHeartProduct.fulfilled, (state, action) => {
      state.heartProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetHeartProducts } = heartProductSlice.actions;
export const heartProductsReducer = heartProductSlice.reducer;
