import produce from 'immer';
import { Types } from './actions';

const initialState = {
  test: 'aaaa',
  signed: true,
  token: null,
  loading: false,
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
      case Types.LOGOUT_REQUEST: {
        draft.loading = true
        break;
      }
      case Types.LOGOUT_SUCCESS: {
        draft.loading = false
        draft.token = null
        draft.signed = false
        break;
      }
      case Types.LOGOUT_FAILED: {
        draft.loading = true
        break;
      }
      default:
        break;
    }
  })
}