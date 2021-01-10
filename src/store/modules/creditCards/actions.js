export const Types = {
  LOAD_CREDIT_CARDS_REQUEST: '@credit_cards/LOAD_CREDIT_CARDS_REQUEST',
  LOAD_CREDIT_CARDS_SUCCESS: '@credit_cards/LOAD_CREDIT_CARDS_FAILED',
  LOAD_CREDIT_CARDS_FAILED: '@credit_cards/LOAD_CREDIT_CARDS_FAILED',

  NEW_CREDIT_CARD_REQUEST: '@credit_cards/NEW_CREDIT_CARD_REQUEST',
  NEW_CREDIT_CARD_SUCCESS: '@credit_cards/NEW_CREDIT_CARD_SUCCESS',
  NEW_CREDIT_CARD_FAILED: '@credit_cards/NEW_CREDIT_CARD_FAILED',
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
}
