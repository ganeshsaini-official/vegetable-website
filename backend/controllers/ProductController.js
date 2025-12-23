import Product from "../modules/Product.js";

const createProduct  = async(req,res) =>{
    try {
  const {name,hindiName,price,categories,stock,discount } = req.body
const imageUrls = req.files.map(file =>file.path);
    const productdata = await Product.create({
        name,hindiName,price,categories,stock,discount, imageUrls : imageUrls
    });
res.status(201).send({
    message:"Product created successfully" , Product
})
    } catch (error) {
        console.log(error)
        res.status(500).send("Error creating product")
    }
 }

export default createProduct 
