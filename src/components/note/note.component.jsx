import "./note.styles.scss";
import { ReactComponent as SyncOff } from "../../svg/sync-off.svg";
import { ReactComponent as SyncOn } from "../../svg/sync-on.svg";
import NOTE_PRIORITY_COLOURS from "../note-list/note-list.utils/note-priority-colour";

const Note = ({ title, date, priority, sync, body, backgroundColour }) => {
  return (
    <div
      className="note-container"
      style={{ backgroundColor: NOTE_PRIORITY_COLOURS[priority] }}
    >
      <div className="note-head">
        <p className="note-title">{title}</p>{" "}
        <span className="note-date">{date}</span>
      </div>
      {body.length ? <div className="note-body">{body}</div> : null}

      <div className="note-footer">
        <span className="note-priority">Priority: {priority}</span>
        {sync ? (
          <SyncOn className="syn-icon" />
        ) : (
          <SyncOff className="syn-icon" />
        )}
      </div>
    </div>
  );
};

export default Note;
