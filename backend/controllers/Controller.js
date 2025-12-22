import User from "../modules/User.js";
import bcrypt, { compare } from "bcrypt";
const userRegister = async (req, res) => {
   const { username, emailId, password, phone } = req.body;
   if (!emailId || !password || !phone) {
      res.send("Please fill All field....!!")
   }
   const isExist = await User.findOne({ emailId });
   if (isExist) {
      res.send("This Email id is already exist...!!")
   }
   const hashPassword = await bcrypt.hash(password, 10)
   const data = await User.create({
      username, emailId, password: hashPassword, phone
   })

   res.send({ Data: "user successfully created----->>", data })
}

const login = async (req, res) => {
   const { password, email } = req.body;

   const isExist = await User.findOne({emailId:email})
   if (!isExist) {
    return  res.send("User not found !")
   }
   console.log(isExist.password , password)
const matchPassword = await bcrypt.compare(password, isExist.password)
console.log(matchPassword);

if(!matchPassword){
   res.send("Invaild Password !")
}
res.send("Login successfully....!!")
}


export { userRegister, login };
