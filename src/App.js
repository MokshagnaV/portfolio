import { Stack } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Stack>
      <NavBar />
      <Home />
      <About />
    </Stack>
  );
}

export default App;
