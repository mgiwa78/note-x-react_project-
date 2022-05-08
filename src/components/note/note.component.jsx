import "./note.styles.scss";
import { ReactComponent as SyncOff } from "../../svg/sync-off.svg";
import { ReactComponent as SyncOn } from "../../svg/sync-on.svg";
import NOTE_PRIORITY_COLOURS from "../note-list/note-list.utils/note-priority-colour";
import {
  setNoteIsLoading,
  updateNoteDisplay,
} from "../../redux/notes/notes-actions";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectNoteDisplay,
  SelectUserNotes,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";
import { syncNoteData } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

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

  const handleSync = async (event) => {
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
    <div
      onClick={handleNoteDisplay}
      className="note-container"
      style={{ backgroundColor: NOTE_PRIORITY_COLOURS[priority] }}
    >
      <div className="note-head">
        <p className="note-title">{title}</p>{" "}
        {date && <span className="note-date">{date}</span>}
      </div>
      {body.length ? <div className="note-body">{body}</div> : null}

      <div className="note-footer">
        <span className="note-priority">Priority: {priority}</span>
        {sync ? (
          <SyncOn onClick={handleSync} className="syn-icon" />
        ) : (
          <SyncOff onClick={handleSync} className="syn-icon" />
        )}
      </div>
    </div>
  );
};

export default Note;
