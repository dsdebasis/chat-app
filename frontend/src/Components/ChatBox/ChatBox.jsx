import React from 'react'
import Serach from '../Sidebar/Serach.jsx';
import ChatArea from '../ChatArea/ChatArea.jsx';
import LogoutBtn from '../Sidebar/LogoutBtn.jsx';
import Conversations from '../Sidebar/Conversations.jsx';
const ChatBox = () => {
  return (
    <div className='h-screen  w-full md:max-w-full box-border  rounded-md  py-1 flex  md:items-center md:justify-center  md:gap-x-4 '>
      <div className='md:h-[80%] backdrop:filter backdrop-blur-md  md:w-[20vw] mt-5 shadow-2xl rounded-2xl'>

        <Serach />
       <Conversations/>
        <div className='fixed bottom-3 px-3'><LogoutBtn /></div>
      </div> 
      <ChatArea/>
    </div>
  )
}

export default ChatBox;
