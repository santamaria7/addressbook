import { actionTypes } from "../enums";

const INITIAL_STATE: Record<string, any> = {};

export function usersReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case actionTypes.USERS_RECEIVED:
      return {
        ...(action.payload as Object),
      };
    default:
      return {};
  }
}
