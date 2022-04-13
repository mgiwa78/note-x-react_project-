import "./create-note.styles.scss";

import Button from "../Button/button.component";
import NoteForm from "../note-input/note-input.component";

const CreateNote = () => {
  return (
    <div className="create-note">
      <div className="create-note-top">
        <Button createBtn> Create </Button>
        <Button deleteBtn> Discard </Button>
      </div>
      <NoteForm />
    </div>
  );
};

export default CreateNote;
