import { combineReducers } from "redux";

import postsReducer from "./posts/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
