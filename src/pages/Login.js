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
      <h1>
        <span>Movie</span> Hive
      </h1>
      <h1>This is our heading font</h1>
      <p>Please log in</p>
      <p className="different">I am a different font. HOW MANY CAPITALS DO YOU WANT?</p>
      <button onClick={signIn}>Login</button>
    </div>
  )
}

export default Login
