export const Types = {
  LOAD_PROFILE_REQUEST: '@profile/LOAD_PROFILE_REQUEST',
  LOAD_PROFILE_SUCCESS: '@profile/LOAD_PROFILE_SUCCESS',
  LOAD_PROFILE_FAILED: '@profile/LOAD_PROFILE_FAILED',

  UPDATE_PROFILE_REQUEST: '@profile/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS: '@profile/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILED: '@profile/UPDATE_PROFILE_FAILED',

  HANDLE_ON_CHANGE_TEXT: '@profile/HANDLE_ON_CHANGE_TEXT',
}

export const Actions = {
  
  loadProfileRequest: () => ({
    type: Types.LOAD_PROFILE_REQUEST,
  }),
  
  loadProfileSuccess: (data) => ({
    type: Types.LOAD_PROFILE_SUCCESS,
    payload: { data }
  }),
  
  loadProfileFailed: (err) => ({
    type: Types.LOAD_PROFILE_FAILED,
    payload: { err }
  }),


  updateProfileRequest: (name, email, cpf, phone, password) => ({
    type: Types.UPDATE_PROFILE_REQUEST,
    payload: { name, email, cpf, phone, password }
  }),
  
  updateProfileSuccess: () => ({
    type: Types.UPDATE_PROFILE_SUCCESS,
  }),
  
  updateProfileFailed: (err) => ({
    type: Types.UPDATE_PROFILE_FAILED,
    payload: { err }
  }),


  handleOnChangeText: (input, value) => ({
    type: Types.HANDLE_ON_CHANGE_TEXT,
    payload: { input, value }
  })
}
