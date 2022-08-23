import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import errorReducer from "./reducers/errorReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({

  errorState: errorReducer,
 
});
// const store = createStore(combinedReducer, applyMiddleware(thunk))
const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunk)
));
// const store = createStore(combinedReducer, applyMiddleware(thunk));
export default store;
