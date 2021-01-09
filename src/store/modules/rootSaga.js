import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import dashboard from './dashboard/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    dashboard,
  ])
}