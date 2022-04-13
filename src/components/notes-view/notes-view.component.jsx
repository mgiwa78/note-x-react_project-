import Button from "../Button/button.component";
import CreateNote from "../create-note-tab/create-note.component";
import NoteForm from "../note-input/note-input.component";
import "./notes-view.styles.scss";

const NotesView = () => {
  return (
    <div className="notes-view-container user-home-blur">
      <CreateNote />
      <div className="view-note"></div>
    </div>
  );
};

export default NotesView;
