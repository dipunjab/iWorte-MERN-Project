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
    try {
      const response = await fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
      });
      const json = await response.json()
      if (!response.ok) {
        throw new Error(json.message || 'Invalid credentials');
      }    localStorage.setItem("auth", json.authToken)
      await getUser()
    } catch (error) {
      throw error;
    }
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

  const deleteUser = async()=>{
    const url = 'http://localhost:8000/api/auth/deleteuser'
    const response = await fetch(url,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-Token": localStorage.getItem("auth")
      }
    });
    await response.json()
    localStorage.removeItem("auth")
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{login, logout, username, deleteUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
