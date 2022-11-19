import { takeLatest } from "redux-saga/effects";
import {
  ADD_GSTIN_LIST,
  ADD_TAGS_LIST,
  GET_GSTIN_USER,
  GET_TAGS_LIST,
  DELETE_GSTIN_USER,
  SEARCH_USER,
} from "../ActionType";
import {
  handleAddGstinList,
  handleAddTagsList,
  handleGetTagsList,
  handleGetGstinUser,
  handleDeleteUser,
  handleSearchUser,
} from "./mainSaga";

export default function* rootSaga() {
  yield takeLatest(ADD_GSTIN_LIST, handleAddGstinList);
  yield takeLatest(ADD_TAGS_LIST, handleAddTagsList);
  yield takeLatest(GET_TAGS_LIST, handleGetTagsList);
  yield takeLatest(GET_GSTIN_USER, handleGetGstinUser);
  yield takeLatest(DELETE_GSTIN_USER, handleDeleteUser);
  yield takeLatest(SEARCH_USER, handleSearchUser);
}
