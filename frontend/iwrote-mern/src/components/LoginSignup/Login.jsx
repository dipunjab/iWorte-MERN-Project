import React, { useContext, useState } from 'react'
import VisualsContainer from './VisualsContainer'
import "./styles.css"
import {useNavigate} from "react-router-dom"
import AuthContext from '../../ContextApi/AuthContext/AuthContext'
import Spinner from '../Spinner'


function Login() {
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  const {login} = context

  const handleSignup = ()=>{
    navigate("/signup")
  }

  const [cred, setCred] = useState({email: "", password: ""})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {email, password} = cred

  const handleLoginSubmit = async(e)=>{
    e.preventDefault()
    setError('')

    try {
      setLoading(true)
      await login(email, password)
      setLoading(false)
      alert("User logged in successfully")
      navigate("/")
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  };

  const onchange = (e)=>{
    setCred({...cred, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div className="signupbtn">
      <button type='button' onClick={handleSignup}>SignUp</button>
    </div>
      {loading && <Spinner/>}
    <div className='loginContainer'>
      <VisualsContainer/>
        <form className="loginForm" onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" required name="email" onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" required name="password" onChange={onchange} className="form-control" id="exampleInputPassword1"/>
          </div>
          {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
          <button type="submit" className="btn btn-dark">Login</button>
        </form>
    </div>
    </>
  )
}

export default Login
