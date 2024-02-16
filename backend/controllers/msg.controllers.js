import Conversation from "../models/conv.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketid } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const { id: receiverid } = req.params;
    const senderid = req.user._id;

    let convesrsation = await Conversation.findOne({
      participants:
       { $all: [senderid, receiverid] }
    })
    if (!convesrsation) {  
      convesrsation = await Conversation.create({
        participants: [senderid, receiverid]
      })
    }
    const newMsg = new Message({
      senderid,receiverid,message
    })
    // console.log(newMsg);
    if(newMsg){
      convesrsation.messages.push(newMsg._id)
    }

    await Promise.all([convesrsation.save(),newMsg.save()])

    const receiverSocketid = getReceiverSocketid(receiverid);
    if(receiverSocketid){
      io.to(receiverSocketid).emit("newMsg",newMsg);
    }


    res.status(201).json(newMsg)
    console.log("message sent ")
  } catch (error) {
      console.log("error in sendMessage controller: ",error.message);
      res.status(500).json({error:"internal server error"})
    
  }
}

export const getMessages =async (req,res)=>{
  try{

    const {id:userToChatId} = req.params;
    const senderId = req.user._id;
    const convesrsation = await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]},
    }).populate("messages");

    if(!convesrsation) return res.status(200).json([]);
    const messages = convesrsation.messages;
    res.status(200).json(messages)
  } catch(error){
     console.log("Error in getMessages controller: ",error.message);
     res.status(500).json({error:"Internal server error"})
  }
}