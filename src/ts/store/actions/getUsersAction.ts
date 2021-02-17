import { actionTypes } from "../enums";

export function getUsersAction(payload: getUsersPayload) {
  return {
    type: actionTypes.GET_USERS,
    payload,
  };
}
