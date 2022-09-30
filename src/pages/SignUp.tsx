import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function SignUp() {

  const [user, setUser] = useState(null)

  function signIn (data) {
    setUser(data.user)
    localStorage.token = data.token
  }

  function signOut () {
    setUser(null)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:2222/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signIn(data)
          }
        })
    }
  }, [])

  return (
    <div>
      <Header />
      <div className="login-page">
        <div className="form">
          <h1>Sign Up</h1>
          <form className="login-form"
          onSubmit={e => {
            e.preventDefault()
            fetch('http://localhost:2222/sign-up', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
              })
            })
              .then(resp => resp.json())
              .then(data => {
                if (data.error) {
                  alert(data.error)
                } else {
                  
                  signIn(data)
                }
              })
          }}>
            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
            />
            <button>SIGN UP</button>
            <p className="message">
              Registered? <Link to="/sign-in">LOG IN</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
