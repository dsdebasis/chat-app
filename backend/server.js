import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser';

app.use(express.json())
app.use(cookieParser())

import router from './routes/authRoutes.js';
import messageRoutes from './routes/message.routes.js' 
import friends from './routes/user.friends.js';

import connectDB from './db/dbConfig.js';
import {app, server} from './socket/socket.js';

 
const PORT = process.env.PORT || 6011;

const __dirname = path.resolve()

dotenv.config();




app.use('/api/auth', router)
app.use('/api/messages',messageRoutes);
app.use('/api/user',friends);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(__dirname,"frontend","dist","index.html")
})

server.listen(PORT, () => { 
  connectDB()
  console.log(`server is started at http://localhost:${PORT}`)
})