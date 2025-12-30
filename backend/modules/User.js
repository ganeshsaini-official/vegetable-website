
import mongoose from "mongoose";
const user = new mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   emailId: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   phone: {
      type: Number,
      require: true
   },
   role: {
      
      type: String,
      anum: ["admin", "costomer"],
      default : "costomer"
   },
   token : {
      type : String,
      default : ""
   }
})

const User = mongoose.model("user", user)

export default User 