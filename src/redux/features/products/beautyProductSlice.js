import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { beautyProductAPIs } from "../../../api/beautyProducts";

const initialState = {
  isLoading: false,
  beautyProducts: [],
  errors: {},
};

export const actFectchAllBeautyProduct = createAsyncThunk(
  "beautyProducts/fetchAllTask",
  async (keySearch) => {
    const { data } = await beautyProductAPIs.getAllBeautyProducts(keySearch);
    return data;
  }
);

const beautyProductSlice = createSlice({
  name: "beautyProducts",
  initialState: initialState,
  reducers: {
    actSetBeautyProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllBeautyProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllBeautyProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllBeautyProduct.fulfilled, (state, action) => {
      state.beautyProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetBeautyProducts } = beautyProductSlice.actions;
export const beautyProductsReducer = beautyProductSlice.reducer;
