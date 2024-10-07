import React, { useState } from 'react'
import VisualsContainer from './VisualsContainer'
import { useNavigate } from 'react-router-dom'

 function Signup() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({name:"", email: "", password:""})

  const {name, email, password} = credentials

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const url ='http://localhost:8000/api/auth/createuser'
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      const json = await response.json()
      console.log(json);
          
      if(!response.ok){
        alert(json.message)
      }else{
        navigate("/login");
        alert("Account Created Successfully")
      }
    
      } catch (error) {
        console.log(error)
    }

  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="signupbtn">
        <button type='button' onClick={() => navigate("/login")}>Login</button>
      </div>
      <div className='signupContainer'>
        <div className='registertext'>
          <p>Register Yourself</p>
          </div>
        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input required maxLength={15} type="text" onChange={onchange} className="form-control" name='name' id="name" aria-describedby="name" />
              <span id="passwordHelpInline" className="form-text">
                Be 1-15 characters long.
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input required type="email" onChange={onchange} className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input required minLength={8} type="text" onChange={onchange} name='password' className="form-control" id="exampleInputPassword1" />
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
            <button type="submit" className="btn btn-dark">SignUp</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
