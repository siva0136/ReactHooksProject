import { call, put, takeLatest } from "redux-saga/effects";
import ServiceCall from "../Service";

function* getUsers() {
  debugger;
  const res = yield call(
    ServiceCall.getCall,
    "https://jsonplaceholder.typicode.com/users"
  );
  yield put({
    type: "USERS",
    payload: res.data,
  });
}

function* usersSaga() {
  debugger;
  return yield takeLatest("UESRS_SAGA", getUsers);
}
export default usersSaga;
