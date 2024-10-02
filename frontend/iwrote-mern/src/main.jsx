import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Provider from "./ContextApi/Provider"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App/>
    </Provider>
  </StrictMode>,
)
