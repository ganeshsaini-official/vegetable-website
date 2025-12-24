import Categories from "../modules/CategoriesModule.js";

const CategoriesController = (req,res)=>{
    const CategoriesData = Categories.create(req.body)

    res.status(200).send(CategoriesData)
}
export default CategoriesController ;

