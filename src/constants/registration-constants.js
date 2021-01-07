import { composeWithNameSpace } from "../utils";

const types = ["SELECT", "RESET"];

export const ActionTypes = composeWithNameSpace(types, "TIMESLOT");

export const errorMessage = {};
