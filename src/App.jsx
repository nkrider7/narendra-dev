import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Home/Homepage";
import { Projects } from "./Pages/Projects/Projects";
import { NotFound } from "./components/NotFound";
import { ProjectView } from "./Pages/Projects/ProjectView";
import Profile from "./Pages/Profiles/Profile";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
     {loading ? <PreLoader /> : <div className="bg-black mx-auto max-w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects/:id" element={<ProjectView/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <div></div>
      </div>}
    
    </>
  );
}

export default App;
