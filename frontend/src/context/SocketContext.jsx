import { createContext, useEffect, useState ,useContext} from "react";
import { useAuthContext } from "./AuthContext.jsx";
import io from 'socket.io-client'
export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
}

export const SocketContextProvider = ({children})=>{

  const [socket,setSocket] = useState(null);
  const [onlineUsers,setOnlineUsers] = useState([]);
  const {authUser} = useAuthContext();

  useEffect(()=>{
     if(authUser){
      const socket = io("https://i-chat-8lft.onrender.com",{
        query:{
          userid:authUser._id
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers",(users)=>{
        console.log(users)
        setOnlineUsers(users);
        // console.log(onlineUsers,"users")
      })
      
      return () =>socket.close();
     } else{
      if(socket){
        socket.close()
        setSocket(null);
      }
     }
  },[authUser])
  return (
    <SocketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </SocketContext.Provider>
  )
}