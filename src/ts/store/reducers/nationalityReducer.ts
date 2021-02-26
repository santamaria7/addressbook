import { actionTypes } from "../enums";

export function nationalityReducer(state = localStorage.getItem('nat') || 'CH', action: Action<string>){
    if(action.type === actionTypes.SET_NATIONALITY){
        return action.payload
    }
    return state
}