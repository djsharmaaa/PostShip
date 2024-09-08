import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Dashboard from './pages/Dashboard/Dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Dashboard/>
  </StrictMode>,
)


