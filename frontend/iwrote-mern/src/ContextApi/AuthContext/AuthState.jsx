import React, { useState, useEffect } from 'react'
import AuthContext from './AuthContext'

function AuthState({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState("User")

  useEffect(() => {
    const authStatus = localStorage.getItem("auth");
    if (authStatus) {
      setIsAuth(true);
      getUser()
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
    setIsAuth(true)
    await getUser()
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
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
    <AuthContext.Provider value={{login, logout, isAuth, username}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
