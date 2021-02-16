import { actionTypes } from "../enums";

const INITIAL_STATE = {
  isFiltered: false,
};
export function searchReducer(
  state = INITIAL_STATE,
  action: Action<findUserPayload>
) {
  if (action.type === actionTypes.FIND_USER) {
    return {
      isFiltered: true,
      ...action.payload,
    };
  }
  return INITIAL_STATE;
}
