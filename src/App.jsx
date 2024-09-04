import './App.css'
import axios from 'axios'
// function App() {

//   const handleLogin = () => {
//     axios.post('http://localhost:3000/users/auth/google_oauth2')
//     .then(response => {
//       console.log(response.data)
//     }).then(error => {
//       console.log(error)
//     })
//   }

//   return (
//     <button onClick={() => handleLogin() }> Login with google</button>
//   )
// }

import { useGoogleLogin } from '@react-oauth/google';

function App() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.error(error)
  });

  return (
    <>
    <button onClick={() => login()}>Sign in with Google 🚀</button>
    </>
  )
}

export default App
