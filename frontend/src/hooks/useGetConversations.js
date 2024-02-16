import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading,setLoading] = useState(false);
  const [conversations,setConversations] = useState([]);

  useEffect(()=>{
    const getConversations = async()=>{
      setLoading(true);
      try {
        const data =await fetch("/api/user/friends/");
     
        const resData = await data.json();
     
        setConversations(resData)  
      } catch (error) {
        toast.error(error.message)
    
      } finally{
        setLoading(false);
      }
    };
    getConversations();

    
  },[])
  return {loading,conversations}
}

export default useGetConversations;


