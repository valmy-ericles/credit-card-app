import produce from 'immer';
import { Types } from './actions';

const initialState = {
  userName: null,
  userEmail: null,
  userCPF: null,
  userPhone: null,

  loading: false,
  updating: false,
}

export default function profile(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_PROFILE_REQUEST: {
        draft.loading = true
        break;
      }
      case Types.LOAD_PROFILE_SUCCESS: {
        const { name, email, cpf, phone } = action.payload.data

        draft.userName = name
        draft.userEmail = email
        draft.userCPF = cpf
        draft.userPhone = phone
        draft.loading = false
        break;
      }
      case Types.LOAD_PROFILE_FAILED: {
        draft.loading = false
        break;
      }
      case Types.HANDLE_ON_CHANGE_TEXT: {
        const { input, value } = action.payload

        draft[input] = value
        break;
      }
      case Types.UPDATE_PROFILE_REQUEST: {
        draft.updating = true
        break;
      }
      case Types.UPDATE_PROFILE_SUCCESS: {
        draft.updating = false
        break;
      }
      case Types.UPDATE_PROFILE_FAILED: {
        draft.updating = false
        break;
      }
      default:
        break;
    }
  })
}