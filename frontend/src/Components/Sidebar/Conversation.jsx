import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext.jsx';


const Conversation = ({ conversation, lastIndex }) => {


  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  console.log(isOnline)
  return (
    <>
      <div className={`flex gap-2  items-center   hover:bg-sky-600 rounded-xl p-2 py-1 cursor-pointer ${isSelected ? "bg-amber-700" : ""}`} onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar  ${isOnline ? "online" : "offline"} `}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profile} alt='avatar' />
          </div>
        </div>
        <div className='flex flex-col '>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold '>{conversation.name}</p>
          </div>
        </div>
      </div>
      {!lastIndex && (<div className='divider my-0 mt-2 py-0 h-2'></div>)}
    </>
  )
}

export default Conversation;
