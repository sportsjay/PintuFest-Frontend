import { createStore, combineReducers } from "redux";

//reducers
import registrationReducer from "./reducers/registration-reducer";

const rootReducer = combineReducers({
  registrationReducer,
});

const store = createStore(rootReducer);

export default store;
