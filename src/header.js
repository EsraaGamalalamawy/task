import {React} from "react";
import {NavLink} from "react-router-dom"
import img from "./image/logo_4_-removebg-preview.png"
import logo from "./image/favicon-3.png"
function Header(){
    const style1=({isActive})=>{
        return{
            color: isActive? "white" :"black",
            fontWeight: isActive? "bold" :"300",
            background: isActive? "#3e97a0":"white",
            padding:"5px 15px",
            borderRadius:"15px"
        }
    }
    return(
        <div className="header">
            <div className="left">
                <img src={img} alt="logo" className="one"/>
                <img src={logo} alt="logo" className="two"/>
            </div>
            <nav id="nav">
                <NavLink to="/profile" style={style1} >Profile Information</NavLink>
                <NavLink to="/login" style={style1}>Login</NavLink>
                <NavLink to="/signup" style={style1}>Signup</NavLink>
            </nav>
        </div>
    )
}
export default Header;