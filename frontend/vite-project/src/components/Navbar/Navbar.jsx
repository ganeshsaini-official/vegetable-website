import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
    return (
        <>

            <nav>
                <div className="navbar" >
                    <div className="leftNavbar">
                        <div className="navbarlogo">
                            <Link to="/" >My Logo</Link>
                   
                        </div>
                        <div className="leftArea">
                            <ul>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/about" >About</Link></li>
                                <li><Link to="/product" >Shop</Link></li>
                                <li><Link to="/wholesale" >Wholesale</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightNavbar">
                        <ul>
                            <ul><Link to="/login" >Login</Link></ul>
                            <ul><Link to="/register" >Register</Link></ul>
                        </ul>
                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar