import React from 'react'
import { HiOutlineLogout } from "react-icons/hi";
import useLogout from '../../hooks/useLogout';
const LogoutBtn = () => {
  const { loading, logout } = useLogout()
  return (
    <div>
      {!loading ? (<HiOutlineLogout className='w-6 h-6 cursor-pointer text-amber-500' onClick={logout} />) : (<span className='loading loading-spinner'> </span>)
      }
    </div> 
  )
}

export default LogoutBtn
