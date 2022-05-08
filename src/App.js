import { Route, Routes } from "react-router";
import { auth } from "./firebase/firebase.utils";

import "./App.css";
import { onAuthStateChangedListener } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import Home from "./components/home/home.component";
import SignInAndSignUp from "./pages/sign-in-and-signout/sign-in-and-signout.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import UserHome from "./pages/user-home/user-home.component";
import React from "react";

function App() {
  const dispatch = useDispatch();
  onAuthStateChangedListener(() => dispatch(setCurrentUser(auth.currentUser)));

  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/auth" element={<SignInAndSignUp />}></Route>
        <Route path="/user" element={<UserHome />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
