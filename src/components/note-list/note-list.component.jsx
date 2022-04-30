import "./note-list.styles.scss";

import Note from "../note/note.component";
import NOTE_CONTENT from "./note-list.utils/note-content";

import Button from "../Button/button.component";
import Sort from "../sort/sort.component";
import Pagination from "../pagination/pagination.component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  SelectUserNotes,
  SelectUserNotesArray,
} from "../../redux/notes/notes-selector";

const NoteList = () => {
  const notes = useSelector(SelectUserNotesArray);
  const [userNote, setUserNote] = useState([]);

  useEffect(() => {
    setUserNote(notes);
  }, [notes]);

  return (
    <div className="notes-container user-home-blur">
      <Button styled> Create new note</Button>
      <Sort />
      <div className="notes-list-container">
        {userNote &&
          userNote.map(({ id, title, body, date, priority, sync }) => {
            return (
              <Note
                key={id}
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
