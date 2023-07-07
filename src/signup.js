import {React,useRef} from "react";
function Signup (){
    const sh1=useRef()
    const sh2=useRef()
    return(
            <form className="outsignup">
                <h1>Create a new account</h1>
                <p className="p1">Basic account information</p>
                <input type="text" placeholder="Name" className="inp1" />
                <div className="pass">
                    <input type="password" placeholder="Password" ref={sh1} className="inp2" />
                    <label onClick={()=>{sh1.current.type="text"}}>Show</label>
                </div>
                <input type="email" placeholder="Email" className="inp1"/>
                <div className="pass" >
                    <input type="password" placeholder="Consirm Password" ref={sh2} className="inp2"/>
                    <label onClick={()=>{sh2.current.type="text"}}>Show</label>
                </div>
                <div className="outicon">
                    <input type="submit" value="Sign up" />
                    <div className="icons">
                        <span>or login with</span>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fab fa-google"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
                <div className="outend">
                    <label for="check" > I accept privacy terms and conditions</label>
                    <input type="checkbox" id="check"/>
                </div>
            </form>
    )
}
export default Signup;