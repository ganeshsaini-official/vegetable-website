import mongoose from "mongoose";

const categoryScama = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
})
const Category = mongoose.model("category", categoryScama)
export default Category;



