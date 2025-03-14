import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Provider from "./ContextApi/Provider"

import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
)
