import "./edit-note.styles.jsx";

import NOTE_PRIORITY_COLOURS from "../note-list/note-list.utils/note-priority-colour";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, updateNote } from "../../redux/notes/notes-actions";
import {
  SelectNoteDisplay,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";
import { ButtonComponent } from "../Button/button.styles";
import {
  EditContentInput,
  EditNoteFormInput,
  EditTitleInput,
  EditTopInput,
  EditPriority,
} from "./edit-note.styles.jsx";

const EditNote = () => {
  const dispatch = useDispatch();
  const noteDisplay = useSelector(SelectNoteDisplay);
  const notes = useSelector(SelectUserNotesArray);

  const [formFields, setFormField] = useState({});

  useEffect(() => {
    setFormField({ ...noteDisplay });
  }, [noteDisplay]);

  //   const formDefaults = {
  //     ...noteDisplay,
  //   };

  const { title, body, priority } = formFields;

  const handleSubmit = (type) => {
    switch (type) {
      case "update": {
        const noteUpdate = { ...formFields, sync: false };
        // dispatch create newnote
        dispatch(updateNote(noteUpdate, notes));
        break;
      }
      case "discard": {
        const noteToDelete = { ...formFields };
        // dispatch create newnote
        dispatch(deleteNote(noteToDelete, notes));
        //clear formfields

        break;
      }
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <div>
      {title && (
        <>
          <EditTopInput>
            <ButtonComponent onClick={() => handleSubmit("update")} createBtn>
              {" "}
              Update{" "}
            </ButtonComponent>
            <ButtonComponent onClick={() => handleSubmit("discard")} deleteBtn>
              {" "}
              Delete{" "}
            </ButtonComponent>
          </EditTopInput>
          <div
            style={{ backgroundColor: NOTE_PRIORITY_COLOURS[priority] }}
            className="edit-note"
          >
            <EditNoteFormInput>
              <EditTitleInput
                value={title}
                name="title"
                type="text"
                placeholder="Add title here"
                onChange={handleChange}
              />
              <EditPriority
                name="priority"
                defaultValue={priority}
                placeholder="Priority"
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </EditPriority>

              <EditContentInput
                value={body}
                name="body"
                type="text"
                placeholder="Enter text here......"
                onChange={handleChange}
              />
            </EditNoteFormInput>
          </div>
        </>
      )}
    </div>
  );
};

export default EditNote;
