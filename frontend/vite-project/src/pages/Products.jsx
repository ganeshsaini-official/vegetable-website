import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const categoryId = query.get("category");

  console.log("categoryID --->", categoryId);

  const getProducts = async () => {
    try {
      let url = "http://localhost:5000/api/products/get-product";

      if (categoryId) {
        url = `${url}?category=${categoryId}`;
      }

      const res = await axios.get(url);
      setProducts(res.data.getProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <div className="main-prodcut-container">
      <div className="prodcut-container">

        {categoryId && (
          <h2 className="text-3xl font-bold mb-6 capitalize">
            {categoryId}
          </h2>
        )}

        <div className="products grid grid-cols-5 gap-4 mx-auto">
          {products.map((item) => (
            <div key={item._id} className="product-items border rounded-lg">

              <img
                src={item.images?.[0]}
                alt={item.name}
                className="h-40 w-full object-cover rounded-t-lg"
              />

              <div className="p-3">
                <h2 className="font-semibold">
                  {item.name} {item.hindiName}
                </h2>

                <div className="flex gap-1 mt-2 mb-3 items-center">
                  <span className="text-xl font-bold text-green-700">
                    ₹{item.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    per {item.unit}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={item.stock === 0}
                    className={`flex-1 py-2 font-semibold rounded ${
                      item.stock === 0
                        ? "bg-gray-300 text-gray-500"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>

                  <button className="flex-1 py-2 font-semibold rounded bg-green-600 hover:bg-green-700 text-white">
                    Buy Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
       {products.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     getProducts();
//   }, []);
// const location = useLocation();
// const query = new URLSearchParams(location.search);
// const categoryId =  query.get("category");
// console.log("categoryID-->",categoryId)

//   const getProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products/get-product");
//       setProducts(res.data.getProduct);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const groupedProducts = products.reduce((acc, item) => {
//     const category = item.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(item);
//     return acc
//   }, {});

//   return (
//     <div className="main-prodcut-container" >
//       <div className="prodcut-container">
//         {Object.keys(groupedProducts).map((category) => (
//           <div key={category} >
//             <h2 className="text-3xl font-bold mb-4 capitalize" >
//               {category}
//             </h2>

//             <div className=" products grid grid-cols-5 gap-4 mx-auto">
//               {groupedProducts[category].map((item) => (
//                 <div key={item._id} className="product-items ">
//                   <img
//                     src={item.images[0]}
//                     alt={item.name}
//                     className="h-30 w-full object-cover"
//                   />
//                   <div className="p-2">
//                     <div className="flex items-center gap-2 ">
//                       <h2>{item.name} {item.hindiName}</h2>
//                     </div>

//                     <div className="  flex gap-1 mt-3 mb-3 items-center">
//                       <span className="text-2xl font-bold text-green-700">₹{item.price}</span>
//                       <span className="text-lg text-gray-500 ">per {item.unit}</span>
//                     </div>

//                     <div className=" add-button flex" >
//                       <button
//                         disabled={item.stock === 0}
//                         className={` px-4 py-2 rounded-sm cursor-pointer font-semibold ${item.stock === 0
//                           ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                           : "bg-green-600 hover:bg-green-700 text-white"
//                           }`}
//                       >
//                         {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
//                       </button>
//                       <button className="bg-green-600 text-white px-4 py-2 cursor-pointer rounded-sm font-semibold hover:bg-green-700 " >
//                         By Now
//                       </button>
//                     </div>
//                   </div>


//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>


//   );
// };

// export default Products;