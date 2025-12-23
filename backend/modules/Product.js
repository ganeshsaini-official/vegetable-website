import mongoose from "mongoose";

const product = new mongoose.Schema({
    name : {
        type: String ,
        required :true 
    },
    hindiName : {
          type: String ,
        required : true
    },
    price : {
        type : Number ,
        required : true,
        min : 0 
    },
    categories :{
        type:String,
        required : true,
        enum : ['vegetables','fruits','dairy',]
    },
    images : {
        type: String ,
        // required: ture
    },
    stock : {
        type : Number ,
        required : true , 
        default : 0 ,
        min : 0
    },
    discount : {
        type: Number ,
        default : 0 ,
        min : 0,
        max : 100
    },
    isAvailable : {
        type : Boolean ,
        default : true 
    },
    createdAt : {
        type:Date,
        default : Date.now 
    },
    updatedAt : {
        type : Date ,
        default : Date.now
    },
})

const Product = mongoose.model("product",product)
export default Product ;

