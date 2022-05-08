import "./note-list.styles.scss";

import Note from "../note/note.component";
import NOTE_CONTENT from "./note-list.utils/note-content";

import Button from "../Button/button.component";
import Sort from "../sort/sort.component";
import Pagination from "../pagination/pagination.component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

import {
  SelectUserNotes,
  SelectUserNotesArray,
  SelectUserNotesArrayObject,
} from "../../redux/notes/notes-selector";
import {
  SetNotesArray,
  SetUserNotesAction,
} from "../../redux/notes/notes-actions";

const NoteList = () => {
  const dispatch = useDispatch();
  const notesObject = useSelector(SelectUserNotes);

  const notesArrayState = useSelector(SelectUserNotesArrayObject);

  useEffect(() => {
    dispatch(SetNotesArray(notesObject));
  }, [notesObject]);

  const [notesArray, setnotesRenderArray] = useState({});

  useEffect(() => {
    setnotesRenderArray(notesArrayState);
  }, [notesArrayState]);

  return (
    <div className="notes-container user-home-blur">
      <Sort />
      <div className="notes-list-container">
        {notesArray.notes &&
          notesArray.notes.map(({ id, title, body, date, priority, sync }) => {
            return (
              <Note
                id={id}
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
