import { all } from "redux-saga/effects";
import usersSaga from "./getUsersSaga";
import getPostsAndPhotosSaga from "./getPostsAndPhotos";
function* rootSaga() {
  return yield all([usersSaga(), getPostsAndPhotosSaga()]);
}
export default rootSaga;
