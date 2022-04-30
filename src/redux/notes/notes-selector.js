import { createSelector } from "reselect";

const noteState = (state) => state.notes;

export const SelectUserNotes = createSelector(
  [noteState],
  (noteState) => noteState.UserNotes
);

export const SelectUserNotesArray = createSelector(
  [SelectUserNotes],
  (UserNotesObject) => {
    const notesId = Object.keys(UserNotesObject);

    return notesId.map((noteId) => ({
      id: noteId,
      ...UserNotesObject[noteId],
    }));
  }
);
