import { composeWithNameSpace } from "../utils";

const types = ["LOGIN", "LOGOUT"];

export const ActionTypes = composeWithNameSpace(types, "ADMIN");

export const errorMessage = {};
