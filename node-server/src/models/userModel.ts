import exp from "constants";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  email: String,
  password: String,
  profession: String,
});
const User = mongoose.model("User", userSchema);

export default User;
