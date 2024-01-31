import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initalState = {

}

const middleware: any = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;