export const Types = {
  LOGIN_REQUEST: '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@auth/LOGIN_SUCCESS',
  LOGIN_FAILED: '@auth/LOGIN_FAILED',

  SIGNUP_REQUEST: '@auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: '@auth/SIGNUP_SUCCESS',
  SIGNUP_FAILED: '@auth/SIGNUP_FAILED',

  LOGOUT_REQUEST: '@auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: '@auth/LOGOUT_SUCCESS',
  LOGOUT_FAILED: '@auth/LOGOUT_FAILED',

  DELETE_ACCOUNT_REQUEST: '@auth/DELETE_ACCOUNT_REQUEST',
  DELETE_ACCOUNT_SUCCESS: '@auth/DELETE_ACCOUNT_SUCCESS',
  DELETE_ACCOUNT_FAILED: '@auth/DELETE_ACCOUNT_FAILED',
}

export const Actions = {
  
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),
  
  loginSuccess: (token) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { token }
  }),
  
  loginFailed: (err) => ({
    type: Types.LOGIN_FAILED,
    payload: { err }
  }),

  
  signUpRequest: (name, email, cpf, phone, password) => ({
    type: Types.SIGNUP_REQUEST,
    payload: { name, email, cpf, phone, password }
  }),
  
  signUpSuccess: (token) => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { token }
  }),
  
  signUpFailed: (err) => ({
    type: Types.SIGNUP_FAILED,
    payload: { err }
  }),


  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST
  }),
  
  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS
  }),
  
  logoutFailed: (err) => ({
    type: Types.LOGOUT_FAILED,
    payload: { err }
  }),


  deleteAccountRequest: () => ({
    type: Types.DELETE_ACCOUNT_REQUEST
  }),
  
  deleteAccountSuccess: () => ({
    type: Types.DELETE_ACCOUNT_SUCCESS
  }),
  
  deleteAccountFailed: (err) => ({
    type: Types.DELETE_ACCOUNT_FAILED,
    payload: { err }
  }),
}
