import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import jsonPlaceholder from "./../../apis/jsonPlaceholder";

// first create the thunk
export const fetchAllPosts = createAsyncThunk(
  "FETCH_POSTS",
  async (params, thunkAPI) => {
    const response = await jsonPlaceholder.get("/posts");
    return response.data;
  }
);

export const fetchPost = createAsyncThunk(
  "FETCH_POST",
  async (postId, thunkAPI) => {
    const response = await jsonPlaceholder.get(`/posts/${postId}`);
    return response.data;
  }
);

// slice
const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    error: "",
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAllPosts.pending]: (state) => {
      state.loading = true;
    },

    [fetchAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = "something occured";
    },

    [fetchAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },

    [fetchPost.pending]: (state) => {
      state.loading = true;
    },

    [fetchPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = "something occured";
    },

    [fetchPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    },
  },
});

export default postSlice.reducer;
