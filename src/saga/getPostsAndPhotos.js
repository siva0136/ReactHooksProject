import { takeLatest, call, put } from "redux-saga/effects";
import ServiceCall from "../Service";
import axios from "axios";
function* getPosts() {
  const postsRes = yield call(
    ServiceCall.getCall,
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(postsRes);
  yield put({
    type: "POSTS",
    payload: postsRes.data,
  });
}
function* getPhotos() {
  const photosRes = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/photos"
  );
  yield put({
    type: "PHOTOS",
    payload: photosRes.data,
  });
}

function* getPostsAndPhotosSaga() {
  yield takeLatest("POSTS_SAGA", getPosts);
  yield takeLatest("PHOTOS_SAGA", getPhotos);
}
export default getPostsAndPhotosSaga;
