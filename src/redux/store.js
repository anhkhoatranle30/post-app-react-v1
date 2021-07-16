import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./Slices/postSlice";
import userReducer from "./Slices/userSlice";
import commentsReducer from "./Slices/commentsSlice";

export const store = configureStore({
  reducer: {
    postState: postReducer,
    users: userReducer,
    comments: commentsReducer,
  },
});
