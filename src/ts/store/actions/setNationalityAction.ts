import { actionTypes } from "../enums";

export function setNationalityAction(payload: string) {
  return {
    type: actionTypes.SET_NATIONALITY,
    payload,
  };
}
