import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import NavBar from "./Components/NavBar";
import "./App.css";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Intro />
    </>
  );
}

export default App;
