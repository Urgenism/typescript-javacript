// import { thunk } from "redux-thunk";
import { AxiosResponse } from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store/rootReducer";
import ApiService from "../../service/apiService";

import { GET_POST_START, GET_POST_SUCCESS, GET_POST_FAILED } from "./types";

const client = new ApiService({});

const getPostsSuccess = (data: AxiosResponse) => {
  return {
    type: GET_POST_SUCCESS,
    payload: {
      data,
    },
  };
};

const getPostsFailed = (error: Error) => {
  return {
    type: GET_POST_FAILED,
    payload: {
      error,
    },
  };
};

export const getPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_START });

    try {
      const response = await client.get("/posts/");
      dispatch(getPostsSuccess(response));
    } catch (error) {
      dispatch(getPostsFailed(error));
    }
  };
};
