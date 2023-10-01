import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { heightPlusProductAPIs } from "../../../api/heightPlusProducts";

const initialState = {
  isLoading: false,
  heightPlusProducts: [],
  errors: {},
};

export const actFectchAllHeightPlusProduct = createAsyncThunk(
  "heightPlusProducts/fetchAllTask",
  async (keySearch) => {
    const { data } = await heightPlusProductAPIs.getAllHeightPlusProducts(keySearch);
    return data;
  }
);

const heightPlusProductSlice = createSlice({
  name: "heightPlusProducts",
  initialState: initialState,
  reducers: {
    actSetHeightPlusProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllHeightPlusProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllHeightPlusProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllHeightPlusProduct.fulfilled, (state, action) => {
      state.heightPlusProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetHeightPlusProducts } = heightPlusProductSlice.actions;
export const heightPlusProductsReducer = heightPlusProductSlice.reducer;
