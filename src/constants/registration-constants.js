import { composeWithNameSpace } from "../utils";

const types = ["SELECT", "DESELECT"];

export const ActionTypes = composeWithNameSpace(types, "TIMESLOT");

export const errorMessage = {};
