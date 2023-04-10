import { ProjectsProvider } from "./context/ProjectsContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Knowledges from "./pages/Knowledges";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ProjectsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Intro />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Knowledges />} path="/knowledges" />
          <Route element={<Experience />} path="/experience" />
          <Route element={<NotFound />} path="/*" />
        </Routes>
      </BrowserRouter>
    </ProjectsProvider>
  );
}

export default App;
