import cloudinary from "../Config/cloudinary.js";
import fs from "fs";
import Product from "../modules/Product.js";

const createProduct = async (req, res) => {
  try {
    //  check files
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images uploaded",
      });
    }

    //  upload to cloudinary
    const images = [];

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "products",
      });

      images.push(result.secure_url);
      fs.unlinkSync(file.path);
      
    }

    //  save product
    const product = await  Product.create({...req.body, images });
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
 // get all products
const getAllProducts = async(req,res)=>{
  try {
    const {category } = req.query;
    let filter = {};  
    if(category ){
      filter.category = category  ;
    }
    const getProduct = await Product.find(filter);
    res.status(200).json(
    {success : true , count : getProduct.length,getProduct,});
  } catch (error) {
    res.status(500).json({
      success:false,
      message : error.message
    })
  }
}

export {createProduct , getAllProducts} ;
