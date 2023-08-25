import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hotComboProductAPIs } from "../../../api/hotComboProducts";

const initialState = {
  isLoading: false,
  hotComboProducts: [],
  errors: {},
};

export const actFectchAllHotComboProduct = createAsyncThunk(
  "hotComboProducts/fetchAllTask",
  async () => {
    const { data } = await hotComboProductAPIs.getAllHotComboProducts();
    return data;
  }
);

const hotComboProductSlice = createSlice({
  name: "hotComboProducts",
  initialState: initialState,
  reducers: {
    actSetHotComboProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllHotComboProduct.pending, (state, action) => {
      state.isLoading = true;
      // console.log(action, "pending ne");
    });
    builder.addCase(actFectchAllHotComboProduct.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
      // console.log(action, "reject ne");
    });
    builder.addCase(actFectchAllHotComboProduct.fulfilled, (state, action) => {
      state.hotComboProducts = action.payload;
      state.isLoading = false;
      // console.log(action, "done ne");
    });
  },
});

export const { actSetHotComboProducts } = hotComboProductSlice.actions;
export const hotComboProductsReducer = hotComboProductSlice.reducer;
