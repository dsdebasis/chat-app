import bcrypt from 'bcryptjs'
import User from '../models/user.schema.js';

import tokenGen from '../utils/genToken.js';
const signup = async (req, res) => {
  try {
    const { name, email, userid, password, confirmPassword, gender } = req.body;
    if (!name || !userid || !email || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "all fields are required" })
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password and confirmPass are not match" })
    }
    const user = await User.findOne({
      email
    });
    if (user) {
      return res.status(400).json({ error: "user already registered" })
    }
    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${name}`
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${name}`

    const newUser = new User({
      name, userid, email, gender,
      profile: gender === "male" ? boyPic : girlPic
    })
    newUser.password = await newUser.hashPass(password);

    if (newUser) {
      tokenGen(newUser._id, res)
      await newUser.save()
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.log("error in signup controller", error.message)
    res.status(500).json({error:"internal server error"})
  }
}
 
const login = async (req, res) => {
  try {
    const { userid, password } = req.body;

    const user = await User.findOne({ userid })
    if (!user) {
      return res.status(400).json({ error: "username or password is invalid " })
    } 
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(400).json({ error: "username and password is invalid " })
    }

     tokenGen(user._id, res);
     res.status(200).json(user);
     
    
  } catch (error) {
    console.log("error in login controller",error.message)
    res.status(500).json({
      error: "internal server error"

    })
  }
}

const logout = async (req, res) => {
  try {
    res.cookie("jwt", { maxAge: 0 });
    res.status(200).json({
      message: "successfully logged out"
    })
  } catch (error) {
    res.status(500).json({
      error: "internal server error"
    })
  }
}

const removeAccount = async (req, res) => {
  const { email, userid } = req.body;
  try {
    const acnt = await User.findOneAndDelete({
      email, userid
    })
    return res.status(200).json({message:"account deleted"})
  } catch (error) {
    res.status(500).json({error:"error in deleting account"})
  }
}
export { signup, login, logout, removeAccount }