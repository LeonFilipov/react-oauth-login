import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Callback from './Callback.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GoogleOAuthProvider clientId='397537841019-g945g3s6113vv4j5d9poivrfto3ipss0.apps.googleusercontent.com'><App/></GoogleOAuthProvider>
  },
  {
    path: '/callback',
    element: <Callback/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
