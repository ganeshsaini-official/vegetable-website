import mongoose from "mongoose";

const db = async()=>{
    try {
         await mongoose.connect("mongodb://localhost:27017/vegetable")
console.log("MongoDB successfuly connected---->")
    } catch (error) {
        console.log("Error--->",error)
    }
}

export default db