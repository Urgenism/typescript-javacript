import { GET_USER_START, GET_USER_FAILED, GET_USER_SUCCESS } from "./types";

const INITIAL_STATE = {
  users: [],
  error: null,
  status: null,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        status: 100,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        status: 1,
      };

    case GET_USER_FAILED:
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
