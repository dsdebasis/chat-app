import { Link } from 'react-router-dom'
import Login from '../Login/Login.jsx'
import Gender from './Gender'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {
  
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    userid: "",
    gender: "",
    password: "",
    confirmPassword: "",
  })
  const { loading, signups } = useSignup()

  function handleGender(gender) {
    setInputs({ ...inputs, gender })
  }

  async function handleSubmit(e) {
  
    e.preventDefault();
     await signups(inputs);
  }
  return (
    <div className='h-screen flex justify-center '>
      <Toaster />
      <div className='flex flex-col justify-center items-center 
    w-[100%] md:w-fit md:min-w-[40vw] mx-5'>
        <div className='w-full  p-6  rounded-xl shadow-md backdrop-filter backdrop-blur-2xl  bg-clip-padding '>
          <div className='text-3xl text-white text-center'>Sign Up</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2 text-white' >Name</label>
              <input type='text' className='w-full h-10  focus:bg-gra input input-bordered bg bg-transparent  text-yellow-50
              placeholder:text-black border-gray-800' placeholder='Enter Name' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })}></input>
            </div>

            <div>
              <label className='label p-2 text-white' >Email</label>
              <input type='email' className='w-full h-10  input input-bordered bg bg-transparent  text-yellow-50  placeholder:text-black border-gray-800' placeholder='Enter Email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}></input>
            </div>

            <div>
              <label className='label p-2 text-white' >User id</label>
              <input type='text' className='w-full h-10  input input-bordered bg bg-transparent text-yellow-50 placeholder:text-black border-gray-800' placeholder='Enter Userid' value={inputs.userid} onChange={(e) => setInputs({ ...inputs, userid: e.target.value })}></input>
            </div>
            <Gender onCheck={handleGender} slctGender={inputs.gender} />
            <div>
              <label className='label p-2 text-white' >Password</label>
              <input type='password' className='w-full  h-10 input input-bordered bg bg-transparent text-yellow-50 placeholder:text-black border-gray-800' placeholder='Password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}>
              </input>
            </div>
            <div>
              <label className='label p-2 text-white' >Confirm Password</label>
              <input type='password' className='w-full  h-10 input input-bordered bg bg-transparent text-yellow-50 placeholder:text-black border-gray-800' placeholder=' Confirm Password' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}>
              </input>
            </div>
            <div className='text-white'>
              Have an Account ?

              <Link to="/login" className='text-cyan-400'> Login</Link>
            </div>
            <div className='mt-4'>
              <button className="w-full h-10 text-white  border-2 border-gray-300  rounded-lg hover:border-green-500" disabled={loading}>{loading ? <span className='loading loading-dots'></span> : "Sign Up"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
