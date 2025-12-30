import express from "express"
import  { getAllCategoris,categoryCreate } from "../controllers/CategoriesController.js";

const categoryRouter = express.Router()


categoryRouter.post("/create",categoryCreate)
categoryRouter.get("/get", getAllCategoris)

export default categoryRouter;