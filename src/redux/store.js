import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loginReducer, registerReducer } from './reducers/userReducers'

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo'))
    : null

const preloadedState = {
    login: { userInfo: userInfoFromStorage },
}

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})


export default createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
)