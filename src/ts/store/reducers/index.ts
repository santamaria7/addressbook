import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { loadingReducer } from "./loadingReducer";
import { searchReducer } from "./searchReducer";

const rootReducer= combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  search: searchReducer
});
export default rootReducer;
