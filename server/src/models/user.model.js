import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    require: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    require: true,
  },
});

const User = model("User", userSchema);
export default User;
