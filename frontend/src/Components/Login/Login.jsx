import { Link } from "react-router-dom"
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";
const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({userid, password});
  
  }
  return (
    <div className='h-screen flex  justify-center items-center text-white placeholder:text-white'>
      <div className="md:w-[30vw] backdrop-filter backdrop-blur-2xl  bg-clip-padding  rounded-2xl p-7 ">
        <div className='text-3xl  text-center'>Login</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 ">
          <div>
            <label className='label p-2 ' >
              <span className="text-base label-text text-white">Userid</span>
            </label>
            <input type='text'
              className='w-full h-10  input input-bordered  border-gray-800 bg-transparent placeholder:text-white' placeholder='Enter Userid'
              value={userid}
              onChange={(e) =>
                setUserid(e.target.value)} ></input>
          </div>
          <div>
            <label className='label p-2 placeholder:text-white' >
              <span>Password</span>
            </label>
            <input type='password'
              className='w-full  h-10 input input-bordered border-gray-800 bg-transparent placeholder:text-white' placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} >
            </input>
          </div>
          <div className="mt-2">
            Don't have an Account  
            <Link to="/signup" className="text-blue-600 mx-2" >Sign Up</Link>
          </div>
          <div className='mt-4'>
            <button className="w-full h-10  border-2  rounded-lg"
              disabled={loading}
            >{loading ? <span className="loading loading-dots"></span> : "Log in"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
