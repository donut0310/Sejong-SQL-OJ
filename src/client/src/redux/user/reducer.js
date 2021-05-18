import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from './types'

const initialState = {
  isLoading: false,
  isAuth: false,
  user_id: '',
  user_name: '',
  role: -1,
  class_id: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth user
    case AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: action.payload.isAuth,
        role: action.payload.role,
        user_id: action.payload.user_id,
        user_name: action.payload.user_name,
        class_id: action.payload.class_id,
      }
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        role: -1,
        user_id: '',
        user_name: '',
        class_id: [],
      }
    }
    // Log in
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
      }
    }
    // Log out
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        role: -1,
        user_id: '',
        user_name: '',
        class_id: [],
      }
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}

export default userReducer
