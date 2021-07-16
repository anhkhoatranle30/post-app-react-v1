import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

// thunk
export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchByPostId",
  async (postId, thunkAPI) => {
    const response = await jsonPlaceholder.get(`/posts/${postId}/comments`);
    return response.data;
  }
);
const initialState = {
  comments: [],
  error: null,
};

const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCommentsByPostId.rejected]: (state, action) => {
      state.error = action.error.message;
      state.comments = [];
    },

    [fetchCommentsByPostId.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.error = null;
    },
  },
});

export default commentsSlice.reducer;
