import jwt from "jsonwebtoken"
import env from "dotenv"
env.config()
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(201).send("Token not found...!!")
        }

        const token = authHeader.replace("Bearer ", "")

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded
        next()

    } catch (error) {
        res.status(400).json(error)
    }
}
export default authMiddleware

