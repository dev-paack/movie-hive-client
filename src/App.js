import './sass/App.scss';
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./pages/Login";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // fail safe
  useEffect( () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      } else {

      }
    })
    
  }, [])
  
  const signOut = () => {
    auth.signOut().then( () => {
      dispatch(logout())
    })
  }
  
  return (
    <div className="App">
      {!user ? <Login /> : <button onClick={signOut}>logged in as: {user.displayName} log out?</button>}
    </div>
  );
}

export default App;
