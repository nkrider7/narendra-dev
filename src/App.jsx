import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Home/Homepage";
import { Projects } from "./Pages/Projects/Projects";
import { NotFound } from "./components/NotFound";
import { ProjectView } from "./Pages/Projects/ProjectView";
import Profile from "./Pages/Profiles/Profile";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  

  return (
    <>
      <div className="bg-black mx-auto max-w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects/:id" element={<ProjectView/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <div></div>
      </div>
    
    </>
  );
}

export default App;
