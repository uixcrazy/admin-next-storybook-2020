import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'


// export default function* root() {
//   yield fork(startup)
//   yield fork(nextRedditChange)
//   yield fork(invalidateReddit)
// }

export default function* rootSaga() {
  yield all([ // gọi nhiều saga
      // watchIncrement(),
      // watchDecrement()
  ]);
}