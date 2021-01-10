import { ActionTypes } from "../constants/registration-constants";

// select time slot action
const selectTimeSlotAction = (select) => ({
  type: ActionTypes.SELECT,
  payload: select,
});

const resetTimeSlotAction = (reset) => ({
  type: ActionTypes.RESET,
  payload: reset,
});

export const setSelectTimeSlotAction = (item) => selectTimeSlotAction(item);
export const setResetTimeSlotAction = (item) => resetTimeSlotAction(item);
