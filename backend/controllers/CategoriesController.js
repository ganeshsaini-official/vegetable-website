import Category from "../modules/CategoryModule.js";


const categoryCreate = async(req,res)=>{
try {
  
  const categoryData = await Category.create(req.body);
  res.status(200).json({message : "category succesfuly created--->", categoryData})

} catch (error) {
  res.status(500).json(error)
}
}

      const getAllCategoris = async (req, res)=>{
        try {
      const categories = await Category.find()
    res.status(200).json({"success": true,
      categories
     })

        } catch (error) {
        res.status(500).json(error)
        }
      
      }

      export {getAllCategoris , categoryCreate} ;


    
  
  
 