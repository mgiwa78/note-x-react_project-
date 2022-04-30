import { NOTE_ACTION_TYPES } from "./notes-action-types";

const INITIAL_STATE = {
  UserNotes: [],
};

const NotesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case NOTE_ACTION_TYPES.SET_NOTES_ACTION:
      return { ...state, UserNotes: payload };
    case NOTE_ACTION_TYPES.CREATE_NEW_NOTE_ACTION:
      return { ...state, UserNotes: payload };
    default:
      return state;
  }
};

export default NotesReducer;
