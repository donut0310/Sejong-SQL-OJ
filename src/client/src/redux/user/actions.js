import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from './types'
import axios from 'axios'

// Auth
export const authRequest = () => {
  // console.log('authRequest Start')
  return {
    type: AUTH_REQUEST,
  }
}

export const authSuccess = (data) => {
  // console.log('authSuccess')
  return {
    type: AUTH_SUCCESS,
    payload: data,
  }
}

export const authFailure = (err) => {
  // console.log('authFailure')
  return {
    type: AUTH_FAILURE,
    payload: err,
  }
}

export const auth = () => {
  return async (dispatch) => {
    try {
      // console.log('auth Start')
      const response = await axios.get('/api/v1/user/auth')

      // console.log('auth get response.data.result=>', response.data.result)

      if (!response.data) throw new Error('로그인 정보 없음')

      dispatch(authSuccess(response.data.result))
      return response.data
    } catch (error) {
      dispatch(authFailure(error))
      return {
        isAuth: false,
      }
    }
  }
}

// Log in
export const logInRequest = () => {
  // console.log('logInRequest Start')
  return {
    type: LOG_IN_REQUEST,
  }
}

export const logInSuccess = (data) => {
  // console.log('logInSuccess')
  return {
    type: LOG_IN_SUCCESS,
    payload: data,
  }
}

export const logInFailure = (err) => {
  // console.log('logInFailure')
  return {
    type: LOG_IN_FAILURE,
    payload: err,
  }
}

export const logIn = (id, password) => {
  return async (dispatch) => {
    try {
      // console.log('logIn Start')
      dispatch(logInRequest())

      const res = await axios.post(`/api/v1/auth/signin`, { user_id: id, user_pw: password })
      // console.log(res)

      if (res.status === 200) {
        dispatch(logInSuccess(id))
        return {
          isCompleted: true,
        }
      } else {
        return {
          isCompleted: false,
        }
      }
    } catch (error) {
      dispatch(logInFailure(error))
      return {
        isCompleted: false,
      }
    }
  }
}

// Log out
export const logOutRequest = () => {
  // console.log('logOutRequest Start')
  return {
    type: LOG_OUT_REQUEST,
  }
}

export const logOutSuccess = (data) => {
  // console.log('logOutSuccess')
  return {
    type: LOG_OUT_SUCCESS,
    payload: data,
  }
}

export const logOutFailure = (err) => {
  // console.log('logOutFailure')
  return {
    type: LOG_OUT_FAILURE,
    payload: err,
  }
}

export const logOut = () => {
  return async (dispatch) => {
    try {
      // console.log('logOut Start')
      dispatch(logOutRequest())

      const { data } = await axios.get('/api/v1/auth/signout')
      // console.log(data)

      dispatch(logOutSuccess())
      return {
        isCompleted: true,
      }
    } catch (error) {
      dispatch(logOutFailure(error))
      return {
        isCompleted: false,
      }
    }
  }
}
