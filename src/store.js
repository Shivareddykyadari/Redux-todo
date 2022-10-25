import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { TodoReducer } from "./reducers/TodoReducers"
const reducer=combineReducers({
     Todo:TodoReducer,
})

// const init={}
const middleware=[thunk]
export const store=legacy_createStore(
    reducer,
    // init,
   composeWithDevTools( applyMiddleware(...middleware))
)