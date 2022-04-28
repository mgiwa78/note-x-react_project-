import PageBlur from "../../components/page-blur/blur.component";
import UserHomeDsignLayer from "../../components/user-home-design/user-home-design.components";
import "./user-home.styles.scss";

import React, { useEffect } from "react";

import NoteList from "../../components/note-list/note-list.component";
import NotesView from "../../components/notes-view/notes-view.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { getUserDataAsync } from "../../firebase/firebase.utils";
import { setUserNotes } from "../../redux/user/user.action";

const UserHome = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const fetchUserNote = async () => {
    const UserNote = await getUserDataAsync(user);
    dispatch(setUserNotes(UserNote));
  };

  useEffect(() => {
    fetchUserNote();
  }, [user]);
  return (
    <React.Fragment>
      <PageBlur />
      <UserHomeDsignLayer />
      <div className="user-home-container">
        <NoteList />
        <NotesView />
      </div>
    </React.Fragment>
  );
};

export default UserHome;
