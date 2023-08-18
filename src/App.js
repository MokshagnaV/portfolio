import { Stack } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Stack>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Stack>
  );
}

export default App;
