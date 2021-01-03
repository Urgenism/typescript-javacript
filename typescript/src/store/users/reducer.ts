import { GET_USER_START, GET_USER_FAILED, GET_USER_SUCCESS } from "./types";
import { IActionTypes } from "../../types/store";

export interface IUsersInitialState {
  users: Array<any>;
  error: Error | null;
  status: 1 | 0 | 100 | null;
}

const INITIAL_STATE: IUsersInitialState = {
  users: [],
  error: null,
  status: null,
};

const postsReducer = (
  state = INITIAL_STATE,
  action: IActionTypes
): IUsersInitialState => {
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
