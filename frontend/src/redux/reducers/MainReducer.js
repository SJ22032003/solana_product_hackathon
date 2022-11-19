import { ADD_GSTIN_LIST_SUCCESS, GET_GSTIN_USER_SUCCESS } from "../ActionType";

const initialState = {
  gstin_data: [],
  changeLocation: false,
};

export const MainReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_GSTIN_USER_SUCCESS:
      newState = {
        ...state,
        gstin_data: action.payload,
      };
      return newState;
    default:
      return state;
  }
};
