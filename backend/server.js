import express from "express"
import router from "./routers/Router.js";
import db from "./database/db.js";
const app = express()

app.use(express.json())

db()

app.use("/api", router)

const  port = 8000

app.listen(port, () => {
    console.log("Server is running-->", port)
})