import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import dashboard from './dashboard/sagas';
import profile from './profile/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    dashboard,
    profile,
  ])
}