import "./create-note.styles.scss";

import Button from "../Button/button.component";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewNote } from "../../redux/notes/notes-actions";
import {
  SelectUserNotes,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";

const CreateNote = () => {
  const notesObject = useSelector(SelectUserNotes);
  const notes = useSelector(SelectUserNotesArray);
  const dispatch = useDispatch();
  const formDefaults = {
    title: "Title",
    priority: "Low",
    body: "Note Content",
  };
  const [formFields, setFormField] = useState(formDefaults);

  const { title, body, priority } = formFields;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormField({ ...formFields, [name]: value });
  };

  const handleSubmit = (type) => {
    switch (type) {
      case "create": {
        const newNote = { ...formFields, date: null, sync: false };
        // dispatch create newnote
        dispatch(addNewNote(newNote, notes, notesObject));
        break;
      }
      case "discard": {
        //clear formfields
        setFormField(formDefaults);
      }
    }
  };
  return (
    <div className="create-note">
      <Button btnOnclick={() => handleSubmit("create")} styled>
        {" "}
        Create new note
      </Button>

      <div className="note-form-input">
        <div className="top-input">
          <input
            value={title}
            name="title"
            type="text"
            placeholder="Add title here"
            className="note-input note-title"
            onChange={handleChange}
          />
          <select
            name="priority"
            defaultValue={priority}
            className="priority"
            placeholder="Priority"
            onChange={handleChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="buttom-input">
          <input
            value={body}
            name="body"
            type="text"
            placeholder="Enter text here......"
            className="note-input note-content"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
