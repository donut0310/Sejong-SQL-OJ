import { CLOSE_MODAL } from './types'

const initialState = {
  usage: null,
  isOpen: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MODAL: {
      return {
        ...state,
        usage: null,
        isOpen: false,
      }
    }

    default:
      return state
  }
}

export default modalReducer
