import { ActionTypes } from "../constants/admin-constants";

const initialState = {
  authToken: "none",
};

function reducer(state, action) {
  switch (action.type) {
    // save token upon login
    case ActionTypes.LOGIN:
      state.authToken = action.payload;
      return {
        ...state,
      };
    // overwrite token upon logout
    case ActionTypes.LOGOUT:
      state.authToken = "none";
      return {
        ...state,
      };
    default:
      return initialState;
  }
}

const adminAuthReducer = reducer;
export default adminAuthReducer;
