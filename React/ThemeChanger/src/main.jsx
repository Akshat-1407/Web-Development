import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ThemeWrapper from './Component/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeWrapper>
)