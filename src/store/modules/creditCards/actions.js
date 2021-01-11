export const Types = {
  LOAD_CREDIT_CARDS_REQUEST: '@credit_cards/LOAD_CREDIT_CARDS_REQUEST',
  LOAD_CREDIT_CARDS_SUCCESS: '@credit_cards/LOAD_CREDIT_CARDS_FAILED',
  LOAD_CREDIT_CARDS_FAILED: '@credit_cards/LOAD_CREDIT_CARDS_FAILED',

  LOAD_CREDIT_CARD_REQUEST: '@credit_cards/LOAD_CREDIT_CARD_REQUEST',
  LOAD_CREDIT_CARD_SUCCESS: '@credit_cards/LOAD_CREDIT_CARD_FAILED',
  LOAD_CREDIT_CARD_FAILED: '@credit_cards/LOAD_CREDIT_CARD_FAILED',

  NEW_CREDIT_CARD_REQUEST: '@credit_cards/NEW_CREDIT_CARD_REQUEST',
  NEW_CREDIT_CARD_SUCCESS: '@credit_cards/NEW_CREDIT_CARD_SUCCESS',
  NEW_CREDIT_CARD_FAILED: '@credit_cards/NEW_CREDIT_CARD_FAILED',

  EDIT_CREDIT_CARD_REQUEST: '@credit_cards/EDIT_CREDIT_CARD_REQUEST',
  EDIT_CREDIT_CARD_SUCCESS: '@credit_cards/EDIT_CREDIT_CARD_SUCCESS',
  EDIT_CREDIT_CARD_FAILED: '@credit_cards/EDIT_CREDIT_CARD_FAILED',
}

export const Actions = {
  
  loadCreditCardsRequest: () => ({
    type: Types.LOAD_CREDIT_CARDS_REQUEST
  }),
  
  loadCreditCardsSuccess: (data) => ({
    type: Types.LOAD_CREDIT_CARDS_SUCCESS,
    payload: { data }
  }),
  
  loadCreditCardsFailed: (err) => ({
    type: Types.LOAD_CREDIT_CARDS_FAILED,
    payload: { err }
  }),


  loadCreditCardRequest: (id) => ({
    type: Types.LOAD_CREDIT_CARD_REQUEST,
    payload: { id }
  }),
  
  loadCreditCardSuccess: (name, number, dueDate, cv) => ({
    type: Types.LOAD_CREDIT_CARD_SUCCESS,
    payload: { name, number, dueDate, cv }
  }),
  
  loadCreditCardFailed: (err) => ({
    type: Types.LOAD_CREDIT_CARD_FAILED,
    payload: { err }
  }),


  newCreditCardRequest: (name, number, dueDate, cv) => ({
    type: Types.NEW_CREDIT_CARD_REQUEST,
    payload: { name, number, dueDate, cv }
  }),
  
  newCreditCardSuccess: () => ({
    type: Types.NEW_CREDIT_CARD_SUCCESS
  }),
  
  newCreditCardFailed: (err) => ({
    type: Types.NEW_CREDIT_CARD_FAILED,
    payload: { err }
  }),


  editCreditCardRequest: (name, number, dueDate, cv) => ({
    type: Types.EDIT_CREDIT_CARD_REQUEST,
    payload: { name, number, dueDate, cv }
  }),
  
  editCreditCardSuccess: () => ({
    type: Types.EDIT_CREDIT_CARD_SUCCESS
  }),
  
  editCreditCardFailed: (err) => ({
    type: Types.EDIT_CREDIT_CARD_FAILED,
    payload: { err }
  }),
}
