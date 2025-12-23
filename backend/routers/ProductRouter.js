import express from "express"
import createProduct  from "../controllers/ProductController.js"
import upload from "../middleware/uploadMiddleware.js"

const productRouter = express.Router()

productRouter.post("/add-product",upload.array("image",5), createProduct )

export default productRouter
