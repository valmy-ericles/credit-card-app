import produce from 'immer';
import { Types } from './actions';

const initialState = {
  user: {
    name: null,
    email: null,
    cpf: null,
    phone: null,
  },

  loading: false,
  updating: false,
}

export default function profile(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_PROFILE_REQUEST: {
        draft.loading = draft.user.name === null ? true : false
        break;
      }
      case Types.LOAD_PROFILE_SUCCESS: {
        const { name, email, cpf, phone } = action.payload.data

        draft.user.name = name
        draft.user.email = email
        draft.user.cpf = cpf
        draft.user.phone = phone

        draft.loading = false
        break;
      }
      case Types.LOAD_PROFILE_FAILED: {
        draft.loading = false
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