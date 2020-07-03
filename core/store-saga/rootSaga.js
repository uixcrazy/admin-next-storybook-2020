import { all, fork, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import sampleSagaSaga from 'app/sample-saga/sagas'
import typicodeUsersSaga from 'app/users/store/saga';


// export default function* root() {
//   yield fork(startup)
//   yield fork(nextRedditChange)
//   yield fork(invalidateReddit)
// }

// export default sampleSagaSaga;

export default function* rootSaga() {
//   // yield fork(sampleSagaSaga)
  yield all([ // gọi nhiều saga
    yield fork(typicodeUsersSaga),
    sampleSagaSaga,
//   //     // watchIncrement(),
//   //     // watchDecrement()
  ]);
}
