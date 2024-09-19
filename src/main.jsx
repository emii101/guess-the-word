import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GuessWordApp } from './GuessWordApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuessWordApp />
  </StrictMode>,
)
