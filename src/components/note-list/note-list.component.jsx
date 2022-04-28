import "./note-list.styles.scss";

import Note from "../note/note.component";
import NOTE_CONTENT from "./note-list.utils/note-content";

import Button from "../Button/button.component";
import Sort from "../sort/sort.component";
import Pagination from "../pagination/pagination.component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserNotes } from "../../redux/user/user.selector";

const NoteList = () => {
  const notes = useSelector(selectUserNotes);
  const [userNote, setUserNote] = useState(null);
  useEffect(() => {
    setUserNote(notes);
    console.log(notes);
  }, [notes]);
  return (
    <div className="notes-container user-home-blur">
      <Button styled> Create new note</Button>
      <Sort />
      <div className="notes-list-container">
        {userNote &&
          userNote.map(({ title, body, date, priority, sync }) => {
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
      <Pagination />
    </div>
  );
};

export default NoteList;
