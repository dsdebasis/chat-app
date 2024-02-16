import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, trim: true, maxLength: 35 },
  email: { type: String, lowercase: true, trim: true, maxLength: 35, unique: true },
  userid: { type: String, lowercase: true, trim: true, maxLength: 20, unique: true, required: true },
  password: { type: String, trim: true, required: true, },
  gender: { type: String, required: true, enum: ["male", "female"] },
  profile: { type: String, default: "" }
}, { timestamps: true })

userSchema.methods.hashPass = async function (password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
}

const User = mongoose.model("User", userSchema);

export default User;