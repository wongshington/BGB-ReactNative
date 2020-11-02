import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../reducers/root_reducer"

const Store = (preLoadedState = {}) => {
  return createStore(rootReducer,applyMiddleware(thunk))
}

export default Store