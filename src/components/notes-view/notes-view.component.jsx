import CreateNote from "../create-note-tab/create-note.component";
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
