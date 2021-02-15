import { actionTypes } from "../enums";

export function getUsersAction(payload) {
  return {
    type: actionTypes.GET_USERS,
    payload,
  };
}
