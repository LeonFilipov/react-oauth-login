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
  const loginWithGoogle = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.error(error)
  });

  const login = () => {
    axios.get('http://localhost:3000/auth/google_oauth2')
    .then(response => console.log(response.data))
    .then(error => console.log(error))
  }
  
  return (
    <>
    <button onClick={() => login()}>Sign in with Google 🚀 (Con backend)</button>
    <button onClick={() => loginWithGoogle()}>Sign in with Google 🚀 (Sin backend)</button>
    </>
  )
}

export default App
