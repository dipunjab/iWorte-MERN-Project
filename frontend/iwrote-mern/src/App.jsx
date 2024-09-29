import Dashboard from "./components/Dashboard/Dashboard"
import Logo from "./components/iWroteLogo/Logo"
import SideBar from "./components/Sidebar/SideBar"
import Notes from './components/Notes/Notes.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <div>
            <SideBar/>
            <Logo/>
        </div>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/notes" element={<Notes/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
