import Dashboard from "./components/Dashboard/Dashboard";
import Logo from "./components/iWroteLogo/Logo";
import SideBar from "./components/Sidebar/SideBar";
import Notes from './components/Notes/Notes.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
import { useContext } from "react";
import AuthContext from "./ContextApi/AuthContext/AuthContext.js";

function App() {
  const context = useContext(AuthContext);
  const { isAuth } = context;

  return (
    <Router>
      {isAuth && (
        <div>
          <SideBar />
          <Logo />
          <RightBar />
        </div>
      )}

      <div className="mainSection">
        <Routes>
          {/* Redirect based on authentication */}
          <Route path="/" element={isAuth ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/notes" element={isAuth ? <Notes /> : <Navigate to="/login" />} />
          <Route path="/viewnote/:noteId" element={isAuth ? <ViewNote /> : <Navigate to="/login" />} />
          <Route path="/addnote" element={isAuth ? <AddNote /> : <Navigate to="/login" />} />
          <Route path="/editnote/:noteId" element={isAuth ? <EditNotes /> : <Navigate to="/login" />} />
          <Route path="/tasks" element={isAuth ? <Tasks /> : <Navigate to="/login" />} />
          <Route path="/viewtask/:taskId" element={isAuth ? <ViewTask /> : <Navigate to="/login" />} />
          <Route path="/stickywall" element={isAuth ? <StickyWall /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
