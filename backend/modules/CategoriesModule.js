import mongoose, { mongo } from "mongoose";

const categories = mongoose.Schema({

    images :{
        type : String
    },
       title : {
        type : String
       }
    })
    
    const Categories = mongoose.model("categoris",categories)
    export default Categories ;
    
    

