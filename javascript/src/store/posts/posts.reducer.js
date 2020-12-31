import {
  GET_POST_START,
  GET_POST_FAILED,
  GET_POST_SUCCESS,
} from "./posts.types";

const INITIAL_STATE = {
  posts: [],
  error: null,
  status: null,
};

const postsReducer = (state = INITIAL_STATE, action) => {
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
