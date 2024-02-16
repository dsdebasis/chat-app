import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationsound from '../assets/sounds/notification.mp3'
const useListenHooks = () => {
  const {socket} = useSocketContext()
  const {messages,setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMsg",(newMsg)=>{
      newMsg.shouldShake = true;
      const sounds = new Audio(notificationsound);
      sounds.play()
      setMessages([...messages,newMsg]) 
    })

    return ()=> socket?.off("newMsg")
  },[socket,setMessages,messages])
}

export default useListenHooks
