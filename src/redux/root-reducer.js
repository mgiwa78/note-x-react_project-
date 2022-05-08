import { combineReducers } from "redux";
import NotesReducer from "./notes/notes-reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  notes: NotesReducer,
});
