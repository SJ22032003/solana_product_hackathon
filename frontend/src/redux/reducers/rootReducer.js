import { combineReducers } from "redux";
import { MainReducer } from "./MainReducer";
import { PopupReducer } from "./PopupReducer";
import { TagsReducer } from "./TagsReducer";

const rootReducer = combineReducers({
  MainReducer,
  PopupReducer,
  TagsReducer,
});

export default rootReducer;
