import { combineReducers } from 'redux';

import auth from './auth/reducer';
import dashboard from './dashboard/reducer';
import profile from './profile/reducer';
import invoices from './invoices/reducer';

export default combineReducers({
  auth,
  dashboard,
  profile,
  invoices,
})