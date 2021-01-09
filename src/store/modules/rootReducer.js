import { combineReducers } from 'redux';

import auth from './auth/reducer';
import dashboard from './dashboard/reducer';

export default combineReducers({
  auth,
  dashboard,
})