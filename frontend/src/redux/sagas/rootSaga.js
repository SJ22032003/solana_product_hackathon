import { take, takeLatest } from "redux-saga/effects";
import { SIGNUP_USER } from "../ActionType";
import { handleSignUp } from "./mainSaga";

export default function* rootSaga() {
  yield takeLatest(SIGNUP_USER, handleSignUp);
}
