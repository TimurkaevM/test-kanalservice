import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (thunkAPI) => {
  try {
    const response = await api.get("users");

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: false,
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },

    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    [fetchUsers.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export default usersSlice.reducer;
