import Dashboard from "./components/Dashboard/Dashboard"
import Logo from "./components/iWroteLogo/Logo"
import SideBar from "./components/Sidebar/SideBar"

function App() {

  return (
    <>
      <div>
          <SideBar/>
          <Logo/>
      </div>
        <Dashboard/>
    </>
  )
}

export default App
