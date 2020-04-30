import { combineReducers } from 'redux'
import appReducer from "./appReducer"

console.log(appReducer)

export default combineReducers({
   app: appReducer,
})