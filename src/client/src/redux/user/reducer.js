import {} from './types'

const initialState = {
  loading: false,
  err: null,
  isLoggedIn: false,
  isAdmin: false,
  email: '',
  name: '',
  registerDate: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
