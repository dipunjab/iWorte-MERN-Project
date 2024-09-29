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

function App() {


  return (
    <>
        <Router>
          <div>
            <SideBar />
            <Logo />
            <RightBar />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/viewnote/:noteId" element={<ViewNote />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
