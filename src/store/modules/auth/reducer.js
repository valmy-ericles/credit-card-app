import produce from 'immer';
import { Types } from './actions';

const initialState = {
  signed: true,
  token: null,
  
  loading: false,
  loadingLogout: false,
  deletingAccount: false,
}

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOGIN_REQUEST: {
        draft.loading = true
        break;
      }
      case Types.LOGIN_SUCCESS: {
        draft.token = action.payload.token
        draft.signed = true
        draft.loading = false
        break;
      }
      case Types.LOGIN_FAILED: {
        draft.loading = false
        break;
      }
      case Types.SIGNUP_REQUEST: {
        draft.loading = true
        break;
      }
      case Types.SIGNUP_SUCCESS: {
        draft.token = action.payload.token
        draft.signed = true
        draft.loading = false
        break;
      }
      case Types.SIGNUP_FAILED: {
        draft.loading = false
        break;
      }
      case Types.LOGOUT_REQUEST: {
        draft.loadingLogout = true
        break;
      }
      case Types.LOGOUT_SUCCESS: {
        draft.loadingLogout = false
        draft.token = null
        draft.signed = false
        break;
      }
      case Types.LOGOUT_FAILED: {
        draft.loadingLogout = true
        break;
      }
      case Types.DELETE_ACCOUNT_REQUEST: {
        draft.deletingAccount = true
        break;
      }
      case Types.DELETE_ACCOUNT_SUCCESS: {
        draft.deletingAccount = false
        draft.signed = false
        break;
      }
      case Types.DELETE_ACCOUNT_FAILED: {
        draft.deletingAccount = true
        break;
      }
      default:
        break;
    }
  })
}