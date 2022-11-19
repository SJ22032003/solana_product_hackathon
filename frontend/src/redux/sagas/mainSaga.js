import { call, put } from "redux-saga/effects";
import { signup } from "../api/apis";
import { SIGNUP_USER_SUCCESS } from "../ActionType";

export function* handleSignUp(action) {
  const response = yield call(signup, action);
  localStorage.setItem("token", response.data.token);
  
}
