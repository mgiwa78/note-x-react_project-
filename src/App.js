import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home.component";
import { Route, Routes, Router } from "react-router";
import SignInAndSignUp from "./pages/sign-in-and-signout/sign-in-and-signout.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<SignInAndSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
