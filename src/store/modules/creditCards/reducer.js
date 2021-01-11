import produce from 'immer';
import { Types } from './actions';

const initialState = {
  creditCards: [],

  creditCard: {
    name: null,
    number: null,
    dueDate: null,
    cv: null,
  },
  
  loading: false,
  loadingCreditCard: false,
  creatingNewCreditCard: false,
  editingCreditCard: false,
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
      case Types.LOAD_CREDIT_CARD_REQUEST: {
        draft.loadingCreditCard = true
        break;
      }
      case Types.LOAD_CREDIT_CARD_SUCCESS: {
        const { name, number, dueDate, cv } = action.payload
        draft.creditCard.name = name
        draft.creditCard.number = number
        draft.creditCard.dueDate = dueDate
        draft.creditCard.cv = '212'
        
        draft.loadingCreditCard = false
        break;
      }
      case Types.LOAD_CREDIT_CARD_FAILED: {
        draft.loadingCreditCard = false
        break;
      }
      case Types.EDIT_CREDIT_CARD_REQUEST: {
        draft.editingCreditCard = true
        break;
      }
      case Types.EDIT_CREDIT_CARD_SUCCESS: {
        draft.editingCreditCard = false
        break;
      }
      case Types.EDIT_CREDIT_CARD_FAILED: {
        draft.editingCreditCard = false
        break;
      }
      default:
        break;
    }
  })
}