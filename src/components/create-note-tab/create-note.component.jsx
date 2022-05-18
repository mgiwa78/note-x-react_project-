import "./create-note.styles.jsx";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewNote } from "../../redux/notes/notes-actions";
import {
  SelectUserNotes,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";
import { ButtonComponent } from "../Button/button.styles";
import {
  ContentInput,
  NoteFormInput,
  Priority,
  TitleInput,
  TopInput,
} from "./create-note.styles.jsx";
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
      <ButtonComponent onClick={() => handleSubmit("create")} authBtn>
        {" "}
        Create new note
      </ButtonComponent>

      <NoteFormInput>
        <TopInput>
          <TitleInput
            value={title}
            name="title"
            type="text"
            placeholder="Add title here"
            className="note-input note-title"
            onChange={handleChange}
          />
          <Priority
            name="priority"
            defaultValue={priority}
            className="priority"
            placeholder="Priority"
            onChange={handleChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Priority>
        </TopInput>
        <div className="buttom-input">
          <ContentInput
            value={body}
            name="body"
            type="text"
            placeholder="Enter text here......"
            className="note-input note-content"
            onChange={handleChange}
          />
        </div>
      </NoteFormInput>
    </div>
  );
};

export default CreateNote;
