// import { thunk } from "redux-thunk";
import ApiService from "../../service/apiService";

import { AxiosResponse } from "axios";

import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILED } from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store/rootReducer";
import { Action } from "redux";

const client = new ApiService({});

const getUsersSuccess = (data: AxiosResponse) => {
  return {
    type: GET_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

const getUsersFailed = (error: Error) => {
  return {
    type: GET_USER_FAILED,
    payload: {
      error,
    },
  };
};

export const getUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
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
