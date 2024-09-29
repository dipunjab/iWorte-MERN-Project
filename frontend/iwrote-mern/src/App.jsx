import Dashboard from "./components/Dashboard/Dashboard"
import Logo from "./components/iWroteLogo/Logo"
import SideBar from "./components/Sidebar/SideBar"
import Notes from './components/Notes/Notes.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import RightBar from "./components/RightSidebar/Rightbar.jsx"
import ViewNote from "./components/Notes/ViewNote.jsx"
import AddNote from "./components/Notes/AddNote.jsx"

function App() {


  return (
    <>
      <Router>
        <div>
          <SideBar />
          <Logo />
          <RightBar />
        </div>
        <div className="mainSection">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/viewnote/:noteId" element={<ViewNote />} />
            <Route path="/addnote" element={<AddNote />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
