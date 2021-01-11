import produce from 'immer';
import { Types } from './actions';

const initialState = {
  creditCards: [],

  loading: false,
  creatingNewCreditCard: false,
}

export default function dashboard(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_CREDIT_CARDS_REQUEST: {
        draft.loading = (draft.creditCards.length === 0 ? true : false)
        break;
      }
      case Types.LOAD_CREDIT_CARDS_SUCCESS: {
        const { data } = action.payload

        draft.creditCards = data
        draft.loading = false
        break;
      }
      case Types.LOAD_CREDIT_CARDS_FAILED: {
        draft.loading = false
        break;
      }
      case Types.NEW_CREDIT_CARD_REQUEST: {
        draft.creatingNewCreditCard = true
        break;
      }
      case Types.NEW_CREDIT_CARD_SUCCESS: {
        draft.creatingNewCreditCard = false
        break;
      }
      case Types.NEW_CREDIT_CARD_FAILED: {
        draft.creatingNewCreditCard = false
        break;
      }
      default:
        break;
    }
  })
}