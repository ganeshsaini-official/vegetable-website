import express from "express"
import router from "./routers/Router.js";
import db from "./Config/db.js";
import cors from "cors";

import productRouter from "./routers/ProductRouter.js";
import CategoriesRouter from "./routers/CategoriesRouter.js";

const app = express()

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:false
    })
)
app.use(express.json())

db()

app.use("/api", router)
app.use("/api/products",productRouter)
app.use("/api/Categories" , CategoriesRouter)
// app.use("/api/products/find",)


const  port = 5000

app.listen(port, () => {
    console.log("Server is running-->", port)
})


