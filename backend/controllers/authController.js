import User from "../modules/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const userRegister = async (req, res) => {
   const { username, emailId, password, phone } = req.body;
   if (!emailId || !password || !phone) {
      return res.status(201).send("Please fill All field....!!")
   }
   const isExist = await User.findOne({ emailId });
   if (isExist) {
      return res.status(201).send("This Email id is already exist...!!")
   }
   const hashPassword = await bcrypt.hash(password, 10)
   const data = await User.create({
      username, emailId, password: hashPassword, phone
   })

   res.status(200).send({ Data: "user successfully created----->>", data })
}

const login = async (req, res) => {
   const { password, emailId } = req.body;

   const isExist = await User.findOne({ emailId: emailId })
   console.log(isExist);

   if (!isExist) {
      return res.status(201).send("User not found !")
   }
   console.log(isExist.password, password)
   const matchPassword = await bcrypt.compare(password, isExist.password)

   if (!matchPassword) {
      return res.status(500).send("Invaild Password !")
   }

   const playload = { isExist: isExist._id }
   const options = { expiresIn: "1h" };

   const token = jwt.sign(playload, process.env.SECRET_KEY, options)
   console.log("Token ---->>", token)
   isExist.token = token;
   isExist.save();

   return res.status(200).send({
      message: "Login successfully....!!",
      token: token
   })
}
const Profile = (req, res) => {
   try {
      res.status(200).send({
         message: "User profile...!!",
      })
   } catch (error) {
      res.status(400).json(error)
   }
}
export { userRegister, login, Profile };
