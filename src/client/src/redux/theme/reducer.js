import { TOGGLE_THEME } from './types'

const initialState = {
  mode: window.localStorage.getItem('theme') || 'light',
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const newMode = state.mode === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('theme', newMode)
      return {
        mode: newMode,
      }
    }
    default: {
      return state
    }
  }
}

export default themeReducer
