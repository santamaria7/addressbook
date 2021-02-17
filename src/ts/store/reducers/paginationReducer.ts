import { actionTypes } from "../enums";

const INITIAL_STATE: PaginationType = {
  limit: 1000,
  offset: 1,
};

export function paginationReducer(
  state = INITIAL_STATE,
  action: Action<UserReceivedType>
) {
  if (action.type === actionTypes.USERS_RECEIVED) {
    const count = state.limit! / 50;
    return {
      ...state,
      offset:
        action.payload?.pagination.offset! <= count
          ? action.payload?.pagination.offset
          : undefined,
      seed: action.payload?.pagination.seed!,
    };
  }
  return state;
}
