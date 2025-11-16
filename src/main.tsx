import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'  // ← CORREGIDO
import './index.css'
import { registerSW } from 'virtual:pwa-register'

// Providers
import { VerificadorProvider } from "./features/verificador/components/VerificadorContext";
import { LanguageProvider } from "./context/LanguageContext";

registerSW();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <VerificadorProvider>
        <AppRouter />
      </VerificadorProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
