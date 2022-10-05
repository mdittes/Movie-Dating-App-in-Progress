import React, {useState} from 'react'
import '../styled/Login.css'
import {useNavigate} from 'react-router-dom'

function Login(  ) {
    let [authMode, setAuthMode] = useState("signin")
    const [username, setUsername] = useState("")

    const navigate = useNavigate();
    const routeChange = () => {
      let path = '/Profile';
      navigate(path);
    }
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:4000/login", {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username}),
      })
      .then(res => res.json())
      .then((user) => console.log(user))
    }
  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form onSubmit={handleSubmit} className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="name"
                  value={username}
                  className="form-control mt-1"
                  placeholder="Name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
              <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit" onClick={routeChange} >Submit</button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
}

export default Login