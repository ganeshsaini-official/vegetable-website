
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/get-product");
     console.log("data--->>",res.data.getProduct);
     
      setProducts(res.data.getProduct);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="products grid grid-cols-4 gap-4">
      {products?.map((item) => (
        <div key={item._id} className="border p-3">
          <img
            src={`http://localhost:8000${item.images}`}
            alt={item.name}
            className="h-40 w-full object-cover"
          />
          <h2>{item.name}</h2>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
