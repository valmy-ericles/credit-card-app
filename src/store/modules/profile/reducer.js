import produce from 'immer';
import { Types } from './actions';

const initialState = {
  userName: null,
  loading: false,
}

export default function profile(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_PROFILE_REQUEST: {
        draft.loading = true
        break;
      }
      case Types.LOAD_PROFILE_SUCCESS: {
        const { name } = action.payload.data

        draft.userName = name
        draft.loading = false
        break;
      }
      case Types.LOAD_PROFILE_FAILED: {
        draft.loading = false
        break;
      }
      default:
        break;
    }
  })
}