import PageBlur from "../../components/page-blur/blur.component";
import UserHomeDesignLayer from "../../components/user-home-design/user-home-design.components";
import "./user-home.styles.jsx";

import React, { useEffect } from "react";

import NoteList from "../../components/note-list/note-list.component";
import NotesView from "../../components/notes-view/notes-view.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { getUserDataAsync } from "../../firebase/firebase.utils";
import { SetUserNotesAction } from "../../redux/notes/notes-actions";
import { UserHomeContainer } from "./user-home.styles";

const UserHome = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const fetchUserNote = async () => {
    const NewNotes = await getUserDataAsync(user);
    dispatch(SetUserNotesAction(NewNotes));
  };

  useEffect(() => {
    if (!user) return;
    fetchUserNote();
  }, [user]);

  return (
    <React.Fragment>
      <PageBlur />
      <UserHomeDesignLayer />
      <UserHomeContainer>
        <NoteList />
        <NotesView className="noteView" />
      </UserHomeContainer>
    </React.Fragment>
  );
};

export default UserHome;
