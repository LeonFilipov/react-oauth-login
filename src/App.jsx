import './App.css'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

function App() {
  const handleSuccess = (code) => {
    axios.get('http://localhost:3000/auth/google_oauth2/callback', {
      params: {
        code: code
      }
    }).then(response => {
      console.log(response.data)
    }
    ).then(error => {
      console.log(error)
    })
  }

  const loginWithGoogle = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'redirect',
    scope: 'email profile',
    redirect_uri: 'http://localhost:5173/',
    onSuccess: response => handleSuccess(response.code),
    onError: error => console.error(error)
  });
  
  return (
    <>
    <button onClick={() => loginWithGoogle()}>Sign in with Google 🚀</button>
    </>
  )
}

export default App