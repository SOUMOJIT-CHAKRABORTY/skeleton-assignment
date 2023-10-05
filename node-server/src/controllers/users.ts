import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel.ts";

const UserSecret: string = "gjaoieukgtg";

const signupUser = async (req: Request, res: Response) => {
  const { firstname, lastname, age, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ message: "User already exists" });
    } else {
      const newUser = new User({ firstname, lastname, age, email, password });
      await newUser.save();
      const token = jwt.sign({ email, role: "user" }, UserSecret, {
        expiresIn: "1h",
      });
      return res.json({ message: "User created successfully", token });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ email }, UserSecret, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
};

export { signupUser, loginUser };
