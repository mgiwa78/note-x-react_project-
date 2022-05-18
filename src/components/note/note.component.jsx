import "./note.styles.jsx";
import { ReactComponent as SyncOff } from "../../svg/sync-off.svg";
import { ReactComponent as SyncOn } from "../../svg/sync-on.svg";
import NOTE_PRIORITY_COLOURS from "../note-list/note-list.utils/note-priority-colour";
import { updateNoteDisplay } from "../../redux/notes/notes-actions";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectNoteDisplay,
  SelectUserNotes,
} from "../../redux/notes/notes-selector";
import { syncNoteData } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  NoteBody,
  NoteContainer,
  NoteDate,
  NoteFooter,
  NoteHead,
  NotePriority,
  NoteTitle,
} from "./note.styles.jsx";

const Note = ({ id, title, date, priority, sync, body }) => {
  const user = useSelector(selectCurrentUser);

  const noteToDisplay = useSelector(SelectNoteDisplay);

  // const [noteDisplay, setNotDisplay] = useState(noteToDisplay);

  // useEffect(() => {
  //   if (noteToDisplay.id === id) return;
  //   setNotDisplay(noteDisplay);
  // }, [noteToDisplay]);

  const dispatch = useDispatch();
  const notes = useSelector(SelectUserNotes);

  const handleSync = async () => {
    if (sync) return;
    // console.log("clicked");
    // const noteToSync = {
    //   noteData: notes[id],
    //   noteId: id,
    // };
    await syncNoteData(user, { ...notes });
  };

  const handleNoteDisplay = () => {
    if (noteToDisplay.id === id) return;
    dispatch(updateNoteDisplay(notes[id]));
  };
  // const pushNoteIdToUrl = () => {
  //   console.log(id);
  //   param.noteId = id;
  //   navigate(`${id}`);
  // };

  return (
    <NoteContainer
      onClick={handleNoteDisplay}
      style={{ backgroundColor: NOTE_PRIORITY_COLOURS[priority] }}
    >
      <NoteHead>
        <NoteTitle>{title}</NoteTitle> {date && <NoteDate>{date}</NoteDate>}
      </NoteHead>
      {body.length ? <NoteBody>{body}</NoteBody> : null}

      <NoteFooter>
        <NotePriority>Priority: {priority}</NotePriority>
        {sync ? (
          <SyncOn onClick={handleSync} className="syn-icon" />
        ) : (
          <SyncOff onClick={handleSync} className="syn-icon" />
        )}
      </NoteFooter>
    </NoteContainer>
  );
};

export default Note;
