import { POPUP_OPEN } from "../ActionType";
import { POPUP_CLOSE } from "../ActionType";
import { POPUP_DELETE_GSTIN } from "../ActionType";
import { POPUP_CLEAN } from "../ActionType";

const initialState = {
  popup: false,
  deleteGstin: false,
  gstinNumber: "",
};

export const PopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_OPEN:
      return {
        ...state,
        popup: action.open,
      };
    case POPUP_CLOSE:
      return {
        ...state,
        popup: action.open,
      };
    case POPUP_DELETE_GSTIN:
      return {
        ...state,
        deleteGstin: action.deleteGstin,
        gstinNumber: action.gstinNumber,
        popup: action.open,
      };
    case POPUP_CLEAN:
      return {
        ...state,
        deleteGstin: false,
        gstinNumber: "",
      }
    default:
      return state;
  }
};
