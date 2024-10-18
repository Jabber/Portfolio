import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
