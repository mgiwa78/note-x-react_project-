import "./note-list.styles.scss";

import Note from "../note/note.component";
import NOTE_PRIORITY_COLOURS from "./note-list.utils/note-priority-colour";
import NOTE_CONTENT from "./note-list.utils/note-content";

import Button from "../Button/button.component";
import Sort from "../sort/sort.component";

const NoteList = () => {
  return (
    <div className="notes-container user-home-blur">
      <Button styled> Create new note</Button>
      <Sort />
      <div className="notes-list-container">
        {NOTE_CONTENT.map(({ title, body, date, priority, sync }) => {
          return (
            <Note
              key={title}
              title={title}
              body={body}
              date={date}
              priority={priority}
              sync={sync}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
