import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PostList from "./Posts/PostList";
import PostDetail from "./Posts/PostDetail";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route exact path="/posts/:postId">
            <PostDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
