import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

// create thunk
export const fetchUserById = createAsyncThunk(
  "FETCH_USER",
  async (userId, thunkAPI) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    return response.data;
  }
);

// create slice
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default userSlice.reducer;
