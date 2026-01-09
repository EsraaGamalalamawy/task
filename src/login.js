import {React,useRef} from "react";
import { NavLink } from "react-router-dom";
function Login(){
    const sh=useRef()
    return(
        <div className="outlogin">
            <h1>Login</h1>
            <form >
                <input type="Email" placeholder="Example@Example.com" />
                <div className="pass">
                    <input type="password" placeholder="Password" ref={sh}  />
                    <label onClick={()=>{sh.current.type="text"}} >Show</label>
                </div>
                <a href="http://localhost:3000/login" className="forget">forget your Password ?</a>
                <input type="submit" value="Login"/>
            </form>
            <div className="icons">
                <span>Or login with</span>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fab fa-google"></i>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="sign">
                Not a member yet ? 
                <NavLink to="/signup">click here to sign up</NavLink>
            </div>
        </div>
    )
}
export default Login;
