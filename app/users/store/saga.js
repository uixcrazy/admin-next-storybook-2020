import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import {
  ACTION_TYPES,
  loadUsersFailure,
  loadUsersSuccess
} from './actions';

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json();
    yield put(loadUsersSuccess(data))
  } catch (err) {
    yield put(loadUsersFailure(err))
  }
}

function* saga() {
  yield takeLatest(ACTION_TYPES.LOAD_USERS_REQUEST, loadDataSaga)
}

export default saga
