import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// React 19 hoists Helmet metadata natively; remove build-time tags before mounting
// so they cannot coexist with route metadata after client navigation.
document.head.querySelectorAll('[data-rh="true"], title').forEach(node => node.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
