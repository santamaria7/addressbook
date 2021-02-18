import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { loadingReducer } from "./loadingReducer";
import { searchReducer } from "./searchReducer";
import { paginationReducer } from "./paginationReducer";
import { nationalityReducer } from "./nationalityReducer";

const rootReducer= combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  search: searchReducer,
  pagination: paginationReducer, // In a real world, large-scale project, we use a different approach to keep track of the pagination
  nationality: nationalityReducer // same as pagination
});
export default rootReducer;
