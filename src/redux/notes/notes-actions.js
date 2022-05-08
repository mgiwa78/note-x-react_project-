import { NOTE_ACTION_TYPES } from "./notes-action-types";

export const SetUserNotesAction = (notes) => {
  return {
    type: NOTE_ACTION_TYPES.SET_NOTES_ACTION,
    payload: notes,
  };
};
export const setDefaultStates = () => {
  return {
    type: NOTE_ACTION_TYPES.SET_NOTES_DEFAULT_STATE,
  };
};

export const SortNotesArrayAction = (prevnotesArray, sortFilter) => {
  const notesArray = SortNotesArray(prevnotesArray, sortFilter);
  return {
    type: NOTE_ACTION_TYPES.SET_NOTES_SORT_ARRAY,
    payload: { notes: notesArray },
  };
};

export const SetNotePage = (newPage) => {
  return {
    type: NOTE_ACTION_TYPES.SET_NOTE_PAGE,
    payload: newPage,
  };
};

const SortNotesArray = (notesArray, sortType) => {
  switch (sortType) {
    case "title":
      notesArray.sort(function (a, b) {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      return notesArray;

    case "priority":
      notesArray.sort(function (a, b) {
        const priorityMap = {
          HIGH: "A",
          MEDIUM: "B",
          LOW: "C",
        };

        const nameA = priorityMap[a.priority.toUpperCase()]; // ignore upper and lowercase
        const nameB = priorityMap[b.priority.toUpperCase()]; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      return notesArray;

    default:
      return notesArray;
  }
};

export const SetNotesArray = (notesObject) => {
  const notesId = Object.keys(notesObject);

  const notesArray = notesId.map((noteId) => ({
    id: noteId,
    ...notesObject[noteId],
  }));

  return {
    type: NOTE_ACTION_TYPES.SET_NOTES_ARRAY,
    payload: { notes: notesArray },
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

// export const setNoteIsLoading = () => {
//   return {
//     type: NOTE_ACTION_TYPES.NOTE_STATE_ISLOADING_ACTION,
//     payload: noteUpdate,
//   };
// };

export const updateNoteDisplay = (displayNote) => {
  return {
    type: NOTE_ACTION_TYPES.UPDATE_NOTE_DISPLAY,
    payload: displayNote,
  };
};

/// action helpers
export const addNewNote = (newNote, prevNotes, notesObject) => {
  console.log(prevNotes);
  const date = new Date();

  const newNotDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  console.log(newNotDate);

  newNote.date = newNotDate;
  console.log(newNote);
  let newNoteIndex = prevNotes.length + 1;

  let newNoteId = "note0" + newNoteIndex;

  for (
    newNoteIndex = prevNotes.length + 1;
    notesObject[newNoteId];
    newNoteIndex++
  ) {
    newNoteId = "note0" + newNoteIndex;
  }
  //   const newNoteIndex = prevNotes.length + 1;
  newNote.id = newNoteId;

  const newNotes = {};

  prevNotes.forEach((prevNote) => {
    // const note = { ...prevNote, sync: true, isLoading: false };

    newNotes[prevNote.id] = prevNote;
  });

  const newNoteObject = { [newNoteId]: newNote };

  const newNotesObject = {
    ...newNotes,

    ...newNoteObject,
  };
  return {
    type: NOTE_ACTION_TYPES.CREATE_NEW_NOTE_ACTION,
    payload: newNotesObject,
  };
};

export const updateNote = (noteUpdate, prevNotes) => {
  // const noteIndex = prevNotes.length + 1;
  // const newNoteIndex = noteIndex + 1;
  //   const newNoteIndex = prevNotes.length + 1;

  const newNotes = {};

  prevNotes.forEach((prevNote) => {
    if (prevNote.id !== noteUpdate.id) {
      newNotes[prevNote.id] = prevNote;
    } else {
      newNotes[noteUpdate.id] = noteUpdate;
    }
  });

  const notesUpdate = {
    ...newNotes,
  };

  return {
    type: NOTE_ACTION_TYPES.UPDATE_NOTE_ACTION,
    payload: notesUpdate,
  };
};
export const deleteNote = (noteToDelete, prevNotes) => {
  // const noteIndex = prevNotes.length + 1;
  // const newNoteIndex = noteIndex + 1;
  //   const newNoteIndex = prevNotes.length + 1;

  const newNotes = {};

  prevNotes.forEach((prevNote) => {
    if (prevNote.id !== noteToDelete.id) {
      newNotes[prevNote.id] = prevNote;
    }
  });

  const notesUpdate = {
    ...newNotes,
  };

  return {
    type: NOTE_ACTION_TYPES.DELETE_NOTE_ACTION,
    payload: notesUpdate,
  };
};

// export const SetNotePageNumber = (action, prePage, noteArray) => {
//   const prevPage = +prePage;
// };
// const noteIsLoading = (prevNotes, noteId) => {
//   const noteKeys = Object.keys(prevNotes);

//   const newNotes = noteKeys.map((noteKey) => {
//     if (noteKey === noteId) {
//       return { id: noteKey, ...prevNotes[noteId], isLoading: true };
//     } else {
//       return { id: noteKey, ...prevNotes[noteKey] };
//     }
//   });
//   console.log(newNotes);
//   //   const newNotes = prevNotes.map((note) => {
//   //     if (note.id === noteId) {
//   //       return { ...note, isLoading: isLoading };
//   //     } else return note;
//   //   });
//   return { ...newNotes };
// };
