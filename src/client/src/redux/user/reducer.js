import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from './types'

const initialState = {
  loading: false,
  isLoggedIn: false,
  isAdmin: false,
  id: '',
  name: '',
  err: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Log in
    case LOG_IN_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        id: action.payload,
        name: '',
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
        isLoggedIn: false,
        isAdmin: false,
        name: '',
      }
    }
    // Log out
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        isAdmin: false,
        id: '',
        name: '',
        err: '',
      }
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      }
    }
    default:
      return state
  }
}

export default userReducer
