import { ProjectsProvider } from "./context/ProjectsContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Knowledges from "./pages/Knowledges";
import Experience from "./pages/Experience";

function App() {
  return (
    <ProjectsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Intro />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<AboutMe />} path="/about-me" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Knowledges />} path="/knowledges" />
          <Route element={<Experience />} path="/experience" />
        </Routes>
      </BrowserRouter>
    </ProjectsProvider>
  );
}

export default App;
