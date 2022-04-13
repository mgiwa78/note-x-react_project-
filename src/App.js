import { Route, Routes, Router } from "react-router";

import logo from "./logo.svg";
import "./App.css";

import Home from "./components/home/home.component";
import SignInAndSignUp from "./pages/sign-in-and-signout/sign-in-and-signout.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import UserHome from "./pages/user-home/user-home.component";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<SignInAndSignUp />}></Route>
        <Route path="/user" element={<UserHome />}></Route>
      </Routes>
    </>
  );
}

export default App;
