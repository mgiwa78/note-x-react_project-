import Button from "../../components/Button/button.component";
import PageBlur from "../../components/page-blur/blur.component";
import UserHomeDsignLayer from "../../components/user-home-design/user-home-design.components";
import "./user-home.styles.scss";

import NoteList from "../../components/note-list/note-list.component";
import NotesView from "../../components/notes-view/notes-view.component";
import Pagination from "../../components/pagination/pagination.component";

const UserHome = () => {
  return (
    <>
      <PageBlur />
      <UserHomeDsignLayer />
      <div className="user-home-container">
        <NoteList />
        <NotesView />
      </div>
    </>
  );
};

export default UserHome;
