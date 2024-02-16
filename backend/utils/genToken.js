import jwt from "jsonwebtoken"

const tokenGen =  function(userid,res){
    const token =  jwt.sign({userid},process.env.SECRET,{
      expiresIn:"15d"
    })
     
    res.cookie("jwt",token,{
      maxAge:15 * 24 * 60 * 60* 1000,
      httpOnly:true,sameSite:"strict",secure:process.env.NODE_ENV !== "developement"
    })
}

export default  tokenGen;