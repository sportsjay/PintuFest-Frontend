import { ActionTypes } from "../constants/registration-constants";

const initialState = {
  selectedTimeSlot: [],
};

function reducer(state, action) {
  switch (action.type) {
    // if select push selected timeslot to cache
    case ActionTypes.SELECT:
      state.selectedTimeSlot.push(action.payload);
      return {
        ...state,
      };
    // if de-select pop the de-selected timeslot from cache
    case ActionTypes.DESELECT:
      const index = state.selectedTimeSlot.indexOf(action.payload);
      state.selectedTimeSlot.splice(index, 1);
      return {
        ...state,
      };
    default:
      return initialState;
  }
}

const registrationReducer = reducer;
export default registrationReducer;
