import { ProjectsProvider } from "./context/ProjectsContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Knowledges from "./pages/Knowledges";
import Experience from "./pages/Experience";

// https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

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
        </Routes>
      </BrowserRouter>
    </ProjectsProvider>
  );
}

export default App;
