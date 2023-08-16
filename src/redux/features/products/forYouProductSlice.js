import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { forYouProductsAPIs } from "../../../api/forYouProducts";

const initialState = {
  isLoading: false,
  forYouProducts: [],
  errors: {},
};

export const actFectchAllForYouProduct = createAsyncThunk(
  "forYouProducts/fetchAllTask",
  async () => {
    const { data } = await forYouProductsAPIs.getAllForYouProducts();
    return data;
  }
);

const forYouProductSlice = createSlice({
  name: "forYouProducts",
  initialState: initialState,
  reducers: {
    actSetForYouProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllForYouProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllForYouProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllForYouProduct.fulfilled, (state, action) => {
      state.forYouProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetForYouProducts, getAllForYouProducts } =
  forYouProductSlice.actions;
export const forYouProductsReducer = forYouProductSlice.reducer;
