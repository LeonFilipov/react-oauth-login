import './App.css'
import { useGoogleLogin } from '@react-oauth/google'

function App() {
  // const sendBackend = (forward) => {
  //   axios.get('http://localhost:3000/auth/google_oauth2/callback', {
  //     params: {
  //       code: forward.code,
  //       prompt: forward.prompt,
  //       authuser: forward.authuser,
  //       scope: forward.scope
  //     }
  //   }).then(response => {
  //     console.log(response.data)
  //   }
  //   ).then(error => {
  //     console.log(error)
  //   })
  // }

  const loginWithGoogle = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'redirect',
    scope: 'email profile',
    // redirect_uri: 'http://localhost:3000/auth/google_oauth2/callback',
    redirect_uri: 'http://localhost:5173/callback',
    onSuccess: response => console.log(response),
    onError: error => console.error(error)
  });
  
  return (
    <>
    <button onClick={() => loginWithGoogle()}>Sign in with Google 🚀</button>
    </>
  )
}

export default App