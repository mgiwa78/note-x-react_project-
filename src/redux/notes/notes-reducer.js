import { NOTE_ACTION_TYPES } from "./notes-action-types";

const INITIAL_STATE = {
  UserNotes: [],
  NoteDisplay: {},
  NotesArray: [],
  
};

const NotesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case NOTE_ACTION_TYPES.SET_NOTES_ACTION:
      return { ...state, UserNotes: payload };
    case NOTE_ACTION_TYPES.SET_NOTES_ARRAY:
      return { ...state, NotesArray: payload };
    case NOTE_ACTION_TYPES.CREATE_NEW_NOTE_ACTION:
      return { ...state, UserNotes: payload };
    case NOTE_ACTION_TYPES.NOTE_STATE_ISLOADING_ACTION:
      return { ...state, UserNotes: payload };
    case NOTE_ACTION_TYPES.UPDATE_NOTE_DISPLAY:
      return { ...state, NoteDisplay: payload };
    case NOTE_ACTION_TYPES.UPDATE_NOTE_ACTION:
      return { ...state, UserNotes: payload };
    case NOTE_ACTION_TYPES.DELETE_NOTE_ACTION:
      return { ...state, UserNotes: payload, NoteDisplay: {} };
    case NOTE_ACTION_TYPES.SET_NOTES_SORT_ARRAY:
      return { ...state, NotesArray: payload };
    default:
      return state;
  }
};

export default NotesReducer;
