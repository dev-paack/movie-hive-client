import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import { auth, provider } from "../firebase"

const Login = () => {
  const dispatch = useDispatch()
  
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      })
      .catch(error => alert(error.message))
  }

  return (
    <div>
      <button onClick={signIn}>Login</button>
    </div>
  )
}

export default Login
