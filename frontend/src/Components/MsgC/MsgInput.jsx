import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMsg';


const MsgInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  
  const sumbitHandler = async (e) => {

    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div className='mx-4 mt-2'>
      <form onSubmit={sumbitHandler}>
        <div className='w-full relative  box-border  rounded-2xl'>
          <input type='text ' className='w-full h-[inherit] p-2.5 text-sm rounded-xl block outline-none border-2 border-gray-200  bg-transparent text-amber-200 focus:border-amber-700' placeholder='send a message' 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button type="submit" className='text-orange-50 absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading ? <div className='loading loading-dots'></div> : <BsSend />}
          </button>
        </div>
      </form>
    </div>
  )
}

export default MsgInput
