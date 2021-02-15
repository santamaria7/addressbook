import { actionTypes } from "../enums";

export function loadingReducer(state = true, action: Action<undefined>){
    return action.type === actionTypes.GET_USERS;

}