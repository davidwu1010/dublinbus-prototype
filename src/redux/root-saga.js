import { all, call } from 'redux-saga/effects';
import { plannerSagas } from './planner/planner.sagas';

function* rootSaga() {
  yield all([call(plannerSagas)]);
}

export default rootSaga;