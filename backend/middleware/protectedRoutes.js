import jwt from 'jsonwebtoken'
import User from '../models/user.schema.js';
const protectRoute = async (req, res, next) => {
  try { 
    const token = req.cookies.jwt;
    
    if (!token) {
      return res.status(401).json({ error: "no token " })
    }
    const userValid =jwt.verify(token, process.env.SECRET);

    if (!userValid) {
      return res.status(401).json({ error: "invalid token" })
    }
    const user = await User.findById(userValid.userid).select("-password")
    // console.log(userValid.userid)
    if (!user) {
      return res.status(401).json({
        error: "user not found"
      })
    }
    req.user = user;
    next()
  } catch (error) {
    // console.log(error);
    res.status(500).json({
    
       error: error})
  }
}
export default protectRoute;