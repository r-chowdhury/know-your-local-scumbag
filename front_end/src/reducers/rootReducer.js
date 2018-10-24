import {combineReducers} from "redux" 
import {usersReducer} from "./usersReducer"
import {politiciansReducer} from "./politiciansReducer"

const rootReducer = combineReducers({
  users: usersReducer,
  politicians: politiciansReducer
})

export default rootReducer;