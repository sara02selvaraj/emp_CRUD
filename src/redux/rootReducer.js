import { combineReducers } from "redux";
import * as employeeReducer from './Employee/employeeReducer'

export const rootReducer = combineReducers({
    [employeeReducer.employeeFeatureKey]: employeeReducer.reducer
})

