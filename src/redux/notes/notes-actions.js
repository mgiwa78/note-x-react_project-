import { getUserDataAsync } from "../../firebase/firebase.utils";
import { NOTE_ACTION_TYPES } from "./notes-action-types";

export const SetUserNotesAction = (notes) => {
  return {
    type: NOTE_ACTION_TYPES.SET_NOTES_ACTION,
    payload: notes,
  };
};

export const updateNoteState = (newNote, prevNotes) => {
  const noteUpdate = addNewNote(newNote, prevNotes);
  console.log(noteUpdate);
  return {
    type: NOTE_ACTION_TYPES.CREATE_NEW_NOTE_ACTION,
    payload: noteUpdate,
  };
};

/// action helpers
export const addNewNote = (newNote, prevNotes) => {
  const newNoteIndex = Object.keys(prevNotes).length + 1;
  const newNoteId = "note0" + newNoteIndex;
  const newNotesObject = { ...prevNotes, [newNoteId]: newNote };

  return {
    type: NOTE_ACTION_TYPES.CREATE_NEW_NOTE_ACTION,
    payload: newNotesObject,
  };
};
