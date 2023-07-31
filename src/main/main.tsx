import React from 'react'
import ReactDOM from 'react-dom/client'
import '../presentation/styles/global.scss'
import Login from '@/presentation/pages/login/login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)
