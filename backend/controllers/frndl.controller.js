import User from "../models/user.schema.js";
const friendList =async (req,res) =>{
  try {
    const currentUser = req.user._id;
    const allFriend =await User.find({_id:{$ne:currentUser}}).select("-password");
   
    res.status(200).json(allFriend) 
  } catch (error) {
    console.log("error in friend list controllers",error)
    res.status(500).json({error:"error in showing friendList",error})
  }
}

export default friendList;