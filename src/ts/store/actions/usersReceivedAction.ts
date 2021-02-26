import { actionTypes } from "../enums";

export function usersReceivedAction(payload: UserReceivedType) {
  return {
    type: actionTypes.USERS_RECEIVED,
    payload,
  };
}
