import { actionTypes } from "../enums";

const INITIAL_STATE: User[] = [];

export function usersReducer(
  state = INITIAL_STATE,
  action: Action<UserReceivedType>
) {
  switch (action.type) {
    case actionTypes.USERS_RECEIVED:
      const temp = state.slice();
      return temp.concat(action.payload?.results!);
    case actionTypes.EMPTY_LIST:
      return [];
    default:
      return state;
  }
}
