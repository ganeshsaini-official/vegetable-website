import express from "express";
import CategoriesController from "../controllers/CategoriesController.js";
const CategoriesRouter = express.Router()


CategoriesRouter.post("/" , CategoriesController)


export default CategoriesRouter ;
