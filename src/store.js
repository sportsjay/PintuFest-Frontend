import { createStore, combineReducers } from "redux";

//reducers
import registrationReducer from "./reducers/registration-reducer";
import adminAuthReducer from "./reducers/admin-reducer";

const rootReducer = combineReducers({
  registration: registrationReducer,
  admin: adminAuthReducer,
});

const store = createStore(rootReducer);

export default store;
