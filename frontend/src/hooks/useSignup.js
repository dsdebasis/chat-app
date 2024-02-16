import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
const useSignup =  () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const signups = async ({ name, email, userid, gender, password, confirmPassword }) => {
    const success = checkSignup({ name, email, userid, gender, password, confirmPassword })
    if (!checkSignup ) return;
    
    setLoading(true);
    try {
      const res =await  fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, userid, gender, password, confirmPassword }),
      });
      const data = await res.json()
      if(data.error){
        throw new Error(data.error);
      }
      
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
      toast.success("Successfully Account Created");
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return {loading,signups}
}
export default useSignup;

function checkSignup({ name, email, userid, gender, password, confirmPassword }) {
  if (!name || !email || !userid || !gender || !password || !confirmPassword) {
    toast.error("every filed is required")
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("password and confirm password are not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("password length should be at least 6");
    return false;
  }
  return true;
}