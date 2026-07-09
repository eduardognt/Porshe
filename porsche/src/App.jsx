import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import NavBar from "./Components/NavBar";
import "./App.css";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import Highlights from "./Components/Highlights";
import Colors from "./Components/Colors";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
      <Footer />
    </>
  );
}

export default App;
