import { Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Navbar from "./components/Navbar/navbar"
import About from "./pages/About"
import Product from "./pages/Products"
import Wholesale from "./pages/Wholesale"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/> } />
      <Route path="/product" element={<Product/>} />
      <Route path="/wholesale" element={<Wholesale/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </>

  )
}
export default App