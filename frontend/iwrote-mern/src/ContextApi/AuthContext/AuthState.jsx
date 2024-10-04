import React, { useState, useEffect } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router-dom';

function AuthState({children}) {
    const [username, setUsername] = useState("User")
    const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      getUser();
    } else {
      navigate("/login")
    }
  }, []);

  const login = async(email,password) => {
    const url = 'http://localhost:8000/api/auth/login'
    const response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    });
    const json = await response.json()

    localStorage.setItem("auth", json.authToken)
    await getUser()
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const getUser = async() => {
    const url = 'http://localhost:8000/api/auth/getuser'
    const response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-Token": localStorage.getItem("auth")
      }
    });
    const json = await response.json()
    setUsername(json.name) 
       
  }   

  return (
    <AuthContext.Provider value={{login, logout, username}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
