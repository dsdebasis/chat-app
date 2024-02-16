import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div  className=''>
      <nav className=' md:mx-2 border-2 h-screen text-xl flex flex-col  border-gray-800  rounded-xl text-white md:h-[10vh] backdrop:filter backdrop-blur-xl bg-opacity-0 md:flex-row  gap-y-10 md:items-center p-4  md:justify-between md:sticky '>

        <div ><NavLink to="" className="flex-grow border-b-2 md:border-2 md:px-4 md:py-2 rounded-lg  hover:border-orange-500">Home</NavLink></div>
        <div> 
          <NavLink to="chat" className=" border-b-2 py-2 md:border-2 md:px-4 md:py-2 rounded-lg  hover:border-orange-500">Chat </NavLink>
        </div>
        <div className=' flex flex-col md:flex-row '>
          <NavLink to="login" className="border-b-2 py-4  md:border-2 md:px-4 md:py-2 rounded-lg mx-2 hover:border-orange-500">Login</NavLink>

          <NavLink to="signup" className="border-b-2 py-4 md:border-2 md:px-4 md:py-2 rounded-lg  hover:border-orange-500">Signup</NavLink>
        </div>
      </nav>
    </div>

  )
}

export default Home
