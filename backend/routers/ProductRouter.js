import express from "express"
import { createProduct, getAllProducts }  from "../controllers/ProductController.js"
import upload from "../middleware/uploadMiddleware.js"

const productRouter = express.Router()

productRouter.post("/add-product",upload.array("images",5), createProduct )
productRouter.get("/get-product",getAllProducts)

export default productRouter
