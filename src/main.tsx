import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/login'
import Global from './global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
)
