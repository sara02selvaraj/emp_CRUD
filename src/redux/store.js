import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
let middleWare = [logger, thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))