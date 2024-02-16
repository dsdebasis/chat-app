import React, { useEffect } from 'react'
import { TiMessages } from 'react-icons/ti'
import Messages from '../MsgC/Messages.jsx'
import MsgHeading from '../MsgC/MsgHeading.jsx'
import MsgInput from '../MsgC/MsgInput.jsx'
import useConversation from '../../zustand/useConversation.js'
import { useAuthContext } from '../../context/AuthContext.jsx'

const ChatArea = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  useEffect(() => {
    //unmounting the selectedConversation state
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <>
      <div className='w-full  md:w-[40vw] md:h-[80%] box-border backdrop:filter backdrop-blur-md  md:mt-5  md:shadow-2xl rounded-2xl'>
        {!selectedConversation ? (<NoChat />) : (
          <>
            <MsgHeading />
            <Messages />
            <MsgInput />
          </>
        )}
      </div>
    </>
  )
}

const NoChat = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-xl md:text-5xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Wellocme {authUser.name} </p>
        <p>Select a chat to start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}

export default ChatArea;


