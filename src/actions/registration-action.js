import { ActionTypes } from "../constants/registration-constants";

// select time slot action
const selectTimeSlotAction = (select) => ({
  type: ActionTypes.SELECT,
  payload: select,
});

const deSelectTimeSlotAction = (deselect) => ({
  type: ActionTypes.DESELECT,
  payload: deselect,
});

export const setSelectTimeSlotAction = (item) => selectTimeSlotAction(item);
export const setDeSelectTimeSlotAction = (item) => deSelectTimeSlotAction(item);
