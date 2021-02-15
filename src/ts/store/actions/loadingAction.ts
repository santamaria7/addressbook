import { actionTypes } from "../enums";

export function loadingAction(){
    return {
        type: actionTypes.IS_LOADING
    }
}