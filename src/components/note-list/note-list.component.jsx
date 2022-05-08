import "./note-list.styles.scss";

import Note from "../note/note.component";

import Sort from "../sort/sort.component";
import Pagination from "../pagination/pagination.component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  SelectNotesPage,
  SelectUserNotes,
  SelectUserNotesArrayObject,
} from "../../redux/notes/notes-selector";
import { SetNotesArray } from "../../redux/notes/notes-actions";
import { notesPageArray } from "./note-list.utils/note-list-pagination";

const NoteList = () => {
  const dispatch = useDispatch();
  const notesObject = useSelector(SelectUserNotes);

  const notesArrayState = useSelector(SelectUserNotesArrayObject);

  const notePage = useSelector(SelectNotesPage);

  const [notesArray, setnotesRenderArray] = useState({});

  useEffect(() => {
    if (!notesArrayState) return;
    dispatch(SetNotesArray(notesObject));
    console.log("triger object State");
  }, [notesObject]);

  useEffect(() => {
    if (!notesArrayState.notes?.length) return;
    setnotesRenderArray(notesPageArray(notesArrayState.notes));
    console.log("triger note State");
  }, [notesArrayState]);

  useEffect(() => {
    if (!notesArrayState.notes?.length) return;
    if (notePage === 1) return;
    setnotesRenderArray(notesPageArray(notesArrayState.notes, notePage));
    console.log(notesPageArray(notesArrayState.notes), notePage);
    console.log("triger note page", notePage);
  }, [notePage]);

  // useEffect(() => {
  //   setnotesRenderArray(notesPageArray(notesArrayState.notes, notePage));
  // }, [notePage]);

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
