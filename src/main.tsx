import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import './index.css'
import { registerSW } from 'virtual:pwa-register'
import { VerificadorProvider } from "./features/verificador/components/VerificadorContext";

registerSW();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VerificadorProvider>
      <AppRouter />
    </VerificadorProvider>
  </React.StrictMode>,
)
