import { combineReducers } from 'redux';

import auth from './auth/reducer';
import dashboard from './dashboard/reducer';
import profile from './profile/reducer';

export default combineReducers({
  auth,
  dashboard,
  profile,
})