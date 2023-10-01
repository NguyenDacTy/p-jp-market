import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { users } from "../../../api/users";

const initialState = {
  isLoading: false,
  products: [],
  errors: {},
};

export const actFectchAllUser = createAsyncThunk(
  "users/fetchAllUser",
  async (keyLgEmail, keyLgPass) => {
    const { data } = await users.getUsers(keyLgEmail, keyLgPass);
    return data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    actSetUsers: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(actFectchAllUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actFectchAllUser.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
    });
    builder.addCase(actFectchAllUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});

export const actCreateNewUser = (user) => {
  return async (dispatch) => {
    try {
      await users.createUser(user);
    } catch (error) {}
  };
};

export const { actSetUsers } = userSlice.actions;
export const usersReducer = userSlice.reducer;
