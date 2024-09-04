import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
// import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='397537841019-g945g3s6113vv4j5d9poivrfto3ipss0.apps.googleusercontent.com'>
      <App/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
