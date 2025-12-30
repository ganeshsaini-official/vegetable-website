import express from "express"
import {userRegister , login, Profile} from "../controllers/authController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",userRegister)
router.post("/login", login)
router.get("/profile",authMiddleware, Profile)


export default router ;