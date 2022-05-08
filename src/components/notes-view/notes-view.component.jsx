import CreateNote from "../create-note-tab/create-note.component";
import "./notes-view.styles.scss";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import EditNote from "../edit-note/edit-note.component";
import {
  SelectNoteDisplay,
  SelectUserNotes,
} from "../../redux/notes/notes-selector";
import { useEffect, useState } from "react";

const NotesView = () => {
  return (
    <div className="notes-view-container user-home-blur">
      <CreateNote />
      <div className="view-note">{<EditNote />}</div>
    </div>
  );
};

export default NotesView;
