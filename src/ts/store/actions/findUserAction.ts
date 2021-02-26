import { actionTypes } from "../enums";

export function findUserAction(payload: findUserPayload) {
  return {
    type: actionTypes.FIND_USER,
    payload,
  };
}
