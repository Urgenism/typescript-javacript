// import { thunk } from "redux-thunk";
import ApiService from "../../service/apiService";

import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILED } from "./types";

const client = new ApiService({});

const getUsersSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

const getUsersFailed = (error) => {
  return {
    type: GET_USER_FAILED,
    payload: {
      error,
    },
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_START });

    try {
      const response = await client.get(`/users`);
      dispatch(getUsersSuccess(response));
    } catch (error) {
      dispatch(getUsersFailed(error));
    }
  };
};
