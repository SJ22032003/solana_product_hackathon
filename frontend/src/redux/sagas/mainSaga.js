import { call, put } from "redux-saga/effects";
import {
  addGstinList,
  addTagsList,
  getTagsList,
  getGstinUser,
  deleteUser,
} from "../api/apis";
import {
  ADD_GSTIN_LIST_SUCCESS,
  ADD_TAGS_LIST_SUCCESS,
  GET_GSTIN_USER,
  GET_GSTIN_USER_SUCCESS,
  GET_TAGS_LIST_SUCCESS,
} from "../ActionType";

// Add GSTIN List
export function* handleAddGstinList(action) {
  const response = yield call(addGstinList, action);
  try {
    if (response) {
      yield put({
        type: ADD_GSTIN_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(response, "respsonse");
  }
}

// GET GSTIN User
export function* handleGetGstinUser() {
  const response = yield call(getGstinUser);
  try {
    if (response) {
      yield put({
        type: GET_GSTIN_USER_SUCCESS,
        payload: response.gstin,
      });
    }
  } catch (error) {
    console.log(response, "response");
  }
}

// ADD Tags List
export function* handleAddTagsList(action) {
  const response = yield call(addTagsList, action);
  try {
    if (response) {
      yield put({
        type: ADD_TAGS_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// GET Tags List
export function* handleGetTagsList() {
  const response = yield call(getTagsList);
  try {
    if (response) {
      yield put({
        type: GET_TAGS_LIST_SUCCESS,
        payload: response.tags,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

//Delete user
export function* handleDeleteUser(action) {
  const response = yield call(deleteUser, action);
  if (response.status == 200) {
    yield put({
      type: GET_GSTIN_USER,
    });
  }
}

//Search User
export function* handleSearchUser(action) {
  const response = yield call(getGstinUser, action);
  if (response) {
    yield put({
      type: GET_GSTIN_USER_SUCCESS,
      payload: response.gstin,
    });
  }
}
