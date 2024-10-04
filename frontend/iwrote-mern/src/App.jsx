import Dashboard from "./components/Dashboard/Dashboard";
import Logo from "./components/iWroteLogo/Logo";
import SideBar from "./components/Sidebar/SideBar";
import Notes from './components/Notes/Notes.jsx';

import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import RightBar from "./components/RightSidebar/Rightbar.jsx";
import ViewNote from "./components/Notes/ViewNote.jsx";
import AddNote from "./components/Notes/AddNote.jsx";
import EditNotes from "./components/Notes/EditNotes.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import ViewTask from "./components/Tasks/ViewTask.jsx";
import StickyWall from "./components/StickyWall/StickyWall.jsx";
import Login from "./components/LoginSignup/Login.jsx";
import Signup from "./components/LoginSignup/Signup.jsx";
import { useEffect } from "react";
import Settings from "./components/Settings/Settings.jsx";

function App() {

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  const isAuthenticated = localStorage.getItem("auth");

  
  return (
    <>
      {isAuthenticated && (
        <div>
          <SideBar />
          <Logo />
          <RightBar />
        </div>
      )}

      <div className="mainSection">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login/>} />
          <Route path="/notes" element={isAuthenticated ? <Notes /> : <Login/>} />
          <Route path="/viewnote/:noteId" element={isAuthenticated ? <ViewNote /> : <Login/>} />
          <Route path="/addnote" element={isAuthenticated ? <AddNote /> : <Login/>} />
          <Route path="/editnote/:noteId" element={isAuthenticated ? <EditNotes /> : <Login/>} />
          <Route path="/tasks" element={isAuthenticated ? <Tasks /> : <Login/>} />
          <Route path="/viewtask/:taskId" element={isAuthenticated ? <ViewTask /> : <Login/>} />
          <Route path="/stickywall" element={isAuthenticated ? <StickyWall /> : <Login/>} />
          <Route path="/settings" element={isAuthenticated ? <Settings /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
