import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hotBrandProductAPIs } from "../../../api/hotBrandProducts";

const initialState = {
  isLoading: false,
  hotBrandProducts: [],
  errors: {},
};

export const actFectchAllHotBrandProduct = createAsyncThunk(
  "hotBrandProducts/fetchAllTask",
  async () => {
    const { data } = await hotBrandProductAPIs.getAllHotBrandProducts();
    return data;
  }
);

const hotBrandProductSlice = createSlice({
  name: "hotBrandProducts",
  initialState: initialState,
  reducers: {
    actSetHotBrandProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllHotBrandProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllHotBrandProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllHotBrandProduct.fulfilled, (state, action) => {
      state.hotBrandProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetHotBrandProducts } = hotBrandProductSlice.actions;
export const hotBrandProductsReducer = hotBrandProductSlice.reducer;
