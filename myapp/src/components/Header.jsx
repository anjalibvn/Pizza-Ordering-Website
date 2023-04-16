import foody from "../assets/images/foody.png"
import cart from "../assets/icons/cart.png"
import {Link} from "react-router-dom";
export const Header=()=>{
    return(
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                   <Link to="/" className="toogleColor text-white n0-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img src={foody} alt="logo" className="w-40 h-40 object-cover"></img></Link>
                </div>
              
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                <Link to="/" className="text-xl">Home</Link> 
                    <Link to="#about" className="text-xl">About</Link> 
                </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
           <Link to="/cart">
            <img src={cart} alt="cart" className=" w-5 h-25 object-cover"></img>
           </Link>
           <Link to="/login">Login</Link>
           <Link to="/register">Sign Up</Link>
        </div>
        </nav>
    )
}