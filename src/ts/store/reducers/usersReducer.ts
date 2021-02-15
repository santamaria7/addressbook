import { actionTypes } from "../enums";

const INITIAL_STATE: User[] = [];

export function usersReducer(state = INITIAL_STATE, action: Action<User>) {
  switch (action.type) {
    case actionTypes.USERS_RECEIVED:
      return action.payload;
    default:
      return [];
  }
}
