import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/category/get");
      setCategories(res.data.categories);
      console.log("categories-->", res.data.categories )

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

 return (
  <div className="category-wrapper">
    <h2 className=" text-3xl font-bold category-title">Shop by Category</h2>

    <div className="category-list">
      {categories.map((cat) => (
        <div
          key={cat._id}
          className="category-card"
          onClick={() => navigate(`/product?category=${cat.name}`)}
        >
          <div className="category-img">
            <img src={cat.image} alt={cat.name} />
          </div>
          <p className="  category-name">{cat.name}</p>
        </div>
      ))}
    </div>
  </div>
);

};
export default CategorySection;
