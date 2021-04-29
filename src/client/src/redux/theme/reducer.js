import { TOGGLE_THEME } from './types'

const initialState = {
  mode: 'light',
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        mode: state.mode === 'light' ? 'dark' : 'light',
      }
    }
    default: {
      return state
    }
  }
}

export default themeReducer
