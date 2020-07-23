import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  ACTION_TYPES,
  loadPhotosSuccess,
  loadPhotosFailure
} from './actions';
const API_URL = "https://api.unsplash.com"
const ENDPOINT = {
  photos: "/photos",
}

function* fetchPhotos() {
  try {
    const res = yield fetch(`${API_URL}${ENDPOINT.photos}`, {
      headers: {
        Authorization: "Client-ID 1d62d66884a910f2d6e4d5eddc0f283f046c0063232ee729bb815f0e6b676a99"
      }
    })
    console.log(res)
    const data = yield res.json();
    console.log(data)
    yield put(loadPhotosSuccess(data))
  } catch (err) {
    yield put(loadPhotosFailure(err))
  }
}

function* saga() {
  yield takeLatest(ACTION_TYPES.LOAD_PHOTOS_REQUEST, fetchPhotos)
}

export default saga
