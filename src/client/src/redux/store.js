import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import themeReducer from './theme/reducer'
import userReducer from './user/reducer'
import modalReducer from './modal/reducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  modal: modalReducer,
})

const middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
