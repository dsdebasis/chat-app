import React, { useState } from 'react'
import { TbUserSearch } from 'react-icons/tb'
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
const Serach = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations()
 const handleSubmit = (e)=>{
  e.preventDefault();
  if(!search) return;
  if(search.length < 4){
    toast.error("Search item should be atleast 4 characters")
  }
  const searchConversation = conversations.find((s)=>s.name.toLowerCase().includes(search.toLowerCase()));
  if(searchConversation){
    setSelectedConversation(searchConversation);
    setSearch('')
  } else{
    toast.error("No Such user found")
  }
 }
  return (
    <div className='h-[10%]  p-2   '>
      <form className='flex justify-evenly items-center' onSubmit={handleSubmit}>
      <div>
        <input className='bg-transparent focus:border-b-2 px-3 py-2 rounded-xl outline-none text-white md:w-[90%] placeholder:text-slate-50 text-center' placeholder='Find Friend' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      </div>
      <div className='h-10 w-10 rounded-full flex  justify-center items-center cursor-pointer bg-blue-600 hover:bg-orange-600 '>
        <button type='submit'><TbUserSearch /></button>
      </div>
      </form>
    </div>
    // <form className='flex items-center gap-2'>
    //    <input type='text' placeholder='search..' className='input input-bordered rounded-full' />
    //    <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
    //       <TbUserSearch/>
    //    </button>
    // </form>
  )
}

export default Serach
