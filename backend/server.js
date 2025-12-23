import express from "express"
import router from "./routers/Router.js";
import db from "./Config/db.js";
import productRouter from "./routers/ProductRouter.js";
import CategoriesRouter from "./routers/CategoriesRouter.js";
const app = express()

app.use(express.json())

db()


app.use("/api", router)
app.use("/api/product",productRouter)
app.use("/api/Categories" , CategoriesRouter)

const  port = 8000

app.listen(port, () => {
    console.log("Server is running-->", port)
})