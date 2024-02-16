import React from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MsgSkleton from '../skeletons/MsgSkleton';
import useListenHooks from '../../hooks/useListenMessages.js';


const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log(messages)
  useListenHooks();
  return (
    <div className='w-[100%] h-[80%] px-1 md:px-4  flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map(
        (message) => 
            <Message key={message._id} message={message} />
      )
      }

      
      {loading && [...Array(3)].map((_, idx) => <MsgSkleton key={idx} />)}

      {!loading && messages.length === 0 && (<p className='text-white'>Send a Message to start the Conversation </p>)}
    </div>
  )
}

export default Messages
