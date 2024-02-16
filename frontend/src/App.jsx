
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Home from './Components/Home.jsx'
import Signup from './Components/SIgnup/Signup.jsx'

import ChatBox from './Components/ChatBox/ChatBox.jsx'
import { useAuthContext } from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  const  {authUser} = useAuthContext()
  return (
    <div>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path="/signup" element={authUser? <ChatBox/> : <Signup/>} />
        <Route path="/login" element={authUser? <ChatBox/> : <Login/>} />
        <Route path='/chat' element={authUser ? <ChatBox/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App;
