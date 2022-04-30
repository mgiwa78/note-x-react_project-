import { applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import NotesReducer from "./notes/notes-reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  notes: NotesReducer,
});
