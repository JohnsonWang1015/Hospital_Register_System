import styles from "./App.module.css";

import { Routes, Route } from "solid-app-router";

import MainMenu from "./components/MainMenu";
import Home from "./pages/Home";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import ShowIoT from "./pages/ShowIoT";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctor from "./pages/Doctor";
import WaitHall from "./pages/WaitHall";

function App() {
  return (
    <div>
      <MainMenu></MainMenu>
      <header class={styles.header}>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          {/* <Route path="/features" element={<Features />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/showiot" element={<ShowIoT />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/doctor" element={<Doctor />}></Route>
          <Route path="/" element={<WaitHall />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
