import React from 'react'
import useConversation from '../../zustand/useConversation';
const MsgHeading = () => {
  const {selectedConversation} = useConversation();
  return (
    <div className='h-10 box-border  md:h-[10%] flex md:flex-col '>
      <div className='bg-transparent w-full px-20  md:px-4 md:py-2 mb-2 rounded-xl'>
        <span className='label-text  text-white md:text-2xl'>To :</span>
        <span className='text-cyan-200   mx-3 md:text-2xl '>{selectedConversation.name}</span>
      </div>
    </div>
  )
}

export default MsgHeading
