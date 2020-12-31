// import { thunk } from "redux-thunk";
import ApiService from "../../service/apiService";

import {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
} from "./posts.types";

const client = new ApiService({});

const getPostsSuccess = (data) => {
  return {
    type: GET_POST_SUCCESS,
    payload: {
      data,
    },
  };
};

const getPostsFailed = (error) => {
  return {
    type: GET_POST_FAILED,
    payload: {
      error,
    },
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_START });

    try {
      const response = await client.get(`/posts`);
      dispatch(getPostsSuccess(response));
    } catch (error) {
      dispatch(getPostsFailed(error));
    }
  };
};
