import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer= combineReducers({
  users: usersReducer,
  loading: loadingReducer
});
export default rootReducer;
