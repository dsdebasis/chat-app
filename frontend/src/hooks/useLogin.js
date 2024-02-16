import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()


  const login = async ({userid, password}) => {
    const success = checkLogin({userid, password});
    if(!success) return ;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify({ userid, password })
      });
  
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data);
      toast.success("Successfully login")
    } catch (error) {
      console.log("error in useLogin hooks")
      toast.error(error.message)
    }
    finally{
      setLoading(false)
    }
  }
  return {login,loading };
}

function checkLogin({ userid ,password }) {
  if ( !userid  || !password ) {
    toast.error("every filed is required")
    return false;
  }
  if (password.length < 6) {
    toast.error("password length should be at least 6");
    return false;
  }
  return true;
}
export default useLogin;
