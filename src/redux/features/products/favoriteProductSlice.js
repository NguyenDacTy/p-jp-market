import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { favoriteProductAPIs } from "../../../api/favoriteProducts";

const initialState = {
  isLoading: false,
  favoriteProducts: [],
  errors: {},
};

export const actFectchAllFavoriteProduct = createAsyncThunk(
  "favoriteProducts/fetchAllTask",
  async (keySearch) => {
    const { data } = await favoriteProductAPIs.getAllFavoriteProducts(keySearch);
    return data;
  }
);

const favoriteProductSlice = createSlice({
  name: "favoriteProducts",
  initialState: initialState,
  reducers: {
    actSetFavoriteProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllFavoriteProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllFavoriteProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllFavoriteProduct.fulfilled, (state, action) => {
      state.favoriteProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetFavoriteProducts } = favoriteProductSlice.actions;
export const favoriteProductsReducer = favoriteProductSlice.reducer;
