import { fetchAllPosts } from "../Slices/postSlice";
import { fetchUserById } from "../Slices/userSlice";
import _ from "lodash";

export const postsThenUsers = () => async (dispatch, getState) => {
  await dispatch(fetchAllPosts());

  const posts = getState().postState.posts;

  // get unique userId
  _.chain(posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUserById(id)))
    .value(); //execute the chain
};
