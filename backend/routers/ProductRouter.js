import express from "express"
import { createProduct, getAllProdut }  from "../controllers/ProductController.js"
import upload from "../middleware/uploadMiddleware.js"

const productRouter = express.Router()

productRouter.post("/add-product",upload.array("images",5), createProduct )
productRouter.get("/get-product",getAllProdut)

export default productRouter
