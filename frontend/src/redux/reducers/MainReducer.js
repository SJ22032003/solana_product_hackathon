import { SIGNUP_USER_SUCCESS } from "../ActionType";

const initialState = {
  loggedIn: false,
  authorized: false,
};

export const MainReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SIGNUP_USER_SUCCESS:
      newState = {
        ...state,
        loggedIn: true,
      };
      return newState;
    default:
      return state;
  }
};
