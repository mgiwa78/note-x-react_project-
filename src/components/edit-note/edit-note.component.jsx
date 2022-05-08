import "./edit-note.styles.scss";

import NOTE_PRIORITY_COLOURS from "../note-list/note-list.utils/note-priority-colour";

import Button from "../Button/button.component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, updateNote } from "../../redux/notes/notes-actions";
import {
  SelectNoteDisplay,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";

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
        <div>
          <div className="edit-note-top">
            <Button btnOnclick={() => handleSubmit("update")} createBtn>
              {" "}
              Update{" "}
            </Button>
            <Button btnOnclick={() => handleSubmit("discard")} deleteBtn>
              {" "}
              Delete{" "}
            </Button>
          </div>
          <div
            style={{ backgroundColor: NOTE_PRIORITY_COLOURS[priority] }}
            className="edit-note"
          >
            <div className="edit-note-form-input">
              <div className="edit-top-input">
                <input
                  value={title}
                  name="title"
                  type="text"
                  placeholder="Add title here"
                  className="edit-note-input edit-note-title"
                  onChange={handleChange}
                />
                <select
                  name="priority"
                  defaultValue={priority}
                  className="edit-priority"
                  placeholder="Priority"
                  onChange={handleChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="edit-content-field">
                <input
                  value={body}
                  name="body"
                  type="text"
                  placeholder="Enter text here......"
                  className="edit-note-input edit-note-content"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditNote;
