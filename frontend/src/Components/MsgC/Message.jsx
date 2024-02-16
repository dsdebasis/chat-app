import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation';
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();

// console.log(authUser._id)
  const fromMe = message.senderid === authUser._id;
  const chatClassName = fromMe ?'chat-end' :'chat-start';
  const profile = fromMe ? authUser.profile: selectedConversation?.profile;
  const chatBgColor = fromMe ? "bg-blue-500" : "bg-green-500";
  const shakeClass = message.shouldShake ?"shake" :""
  return (
   
      <div className={` chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profile} />
          </div>
        </div>
        <div className={` chat-bubble text-white  ${chatBgColor} ${shakeClass}`}>{message.message}</div>
        <div className={`chat-footer opacity-100 text-xs flex gap-1 items-center text-white`}>{message.createdAt}</div>
      </div>
  )
}

export default Message;
