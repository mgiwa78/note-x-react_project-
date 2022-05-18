import CreateNote from "../create-note-tab/create-note.component";
import "./notes-view.styles.jsx";
import EditNote from "../edit-note/edit-note.component";
import { NotesViewContainer } from "./notes-view.styles.jsx";

const NotesView = () => {
  return (
    <NotesViewContainer>
      <CreateNote />
      <EditNote />
    </NotesViewContainer>
  );
};

export default NotesView;
