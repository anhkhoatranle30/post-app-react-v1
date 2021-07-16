import { fetchUserById } from "../Slices/userSlice";
import { fetchPost } from "../Slices/postSlice";
import { fetchCommentsByPostId } from "../Slices/commentsSlice";

export const fetchPostThenUserThenComments =
  (postId) => async (dispatch, getState) => {
    await dispatch(fetchPost(postId));
    const post = getState().postState.posts[0];

    await dispatch(fetchUserById(post.userId));
    return await dispatch(fetchCommentsByPostId(post.id));
  };
