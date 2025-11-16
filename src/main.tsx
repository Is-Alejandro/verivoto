import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

registerSW();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
