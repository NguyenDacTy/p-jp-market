import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hotProductsAPIs } from "../../../api/hotProdducts";

const initialState = {
  isLoading: false,
  hotProducts: [],
  errors: {},
};

export const actFectchAllHotProduct = createAsyncThunk(
  "hotProducts/fetchAllTask",
  async () => {
    const { data } = await hotProductsAPIs.getAllHotProducts();
    return data;
  }
);

const hotProductSlice = createSlice({
  name: "hotProducts",
  initialState: initialState,
  reducers: {
    actSetHotProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllHotProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllHotProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllHotProduct.fulfilled, (state, action) => {
      state.hotProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetHotProducts, getAllHotProducts } =
  hotProductSlice.actions;
export const hotProductsReducer = hotProductSlice.reducer;
