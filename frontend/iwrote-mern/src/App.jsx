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

  const notes = [
    {
      id: 1, title: 'Note 1',
      content: 'This is note 1'
    },
    {
      id: 2, title: 'Note 2',
      content: 'This is note 2'
    }
  ]

  return (
    <>
      <Router>
        <div>
          <SideBar />
          <Logo />
          <RightBar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard notes={notes} />} />
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route path="/viewnote/:noteId" element={<ViewNote notes={notes} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
