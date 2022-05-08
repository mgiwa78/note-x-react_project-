import CreateNote from "../create-note-tab/create-note.component";
import "./notes-view.styles.scss";
import EditNote from "../edit-note/edit-note.component";

const NotesView = () => {
  return (
    <div className="notes-view-container user-home-blur">
      <CreateNote />
      <div className="view-note">{<EditNote />}</div>
    </div>
  );
};

export default NotesView;
