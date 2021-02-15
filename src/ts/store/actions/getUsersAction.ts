import { actionTypes } from "../enums";

export function getUsersAction() {
  return {
    type: actionTypes.GET_USERS,
  };
}
