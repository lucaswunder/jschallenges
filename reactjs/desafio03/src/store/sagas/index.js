import { all, takeLatest } from "redux-saga/effects";

import { getUserRequest } from "./user";
import { UserTypes } from "../ducks/user";

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.GET_USER_REQUEST, getUserRequest)]);
}
