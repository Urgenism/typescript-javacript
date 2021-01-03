import { IActionTypes } from "types/store";
import { GET_POST_START, GET_POST_FAILED, GET_POST_SUCCESS } from "./types";

export interface IPostsInitialState {
  posts: Array<any>;
  error: Error | null;
  status: 1 | 0 | 100 | null;
}

const INITIAL_STATE: IPostsInitialState = {
  posts: [],
  error: null,
  status: null,
};

const postsReducer = (
  state = INITIAL_STATE,
  action: IActionTypes
): IPostsInitialState => {
  switch (action.type) {
    case GET_POST_START:
      return {
        ...state,
        status: 100,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        status: 1,
      };

    case GET_POST_FAILED:
      return {
        ...state,
        error: action.payload.error.message,
        status: 0,
      };

    default:
      return state;
  }
};

export default postsReducer;
