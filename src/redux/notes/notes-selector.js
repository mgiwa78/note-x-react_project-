import { createSelector } from "reselect";

const noteState = (state) => state.notes;

export const SelectUserNotes = createSelector(
  [noteState],
  (noteState) => noteState.UserNotes
);

export const SelectNoteDisplay = createSelector(
  [noteState],
  (noteState) => noteState.NoteDisplay
);

export const SelectUserNotesArray = createSelector(
  [noteState],
  (noteState) => noteState.NotesArray.notes
);
export const SelectUserNotesArrayObject = createSelector(
  [noteState],
  (noteState) => noteState.NotesArray
);
