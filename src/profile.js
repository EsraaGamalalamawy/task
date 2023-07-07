import {React, useState } from "react"
import Prof1 from "./profile1"
import Prof2 from "./profile2"
function Profile (){
    const [x, setX] = useState('A')

    return(
        <div className="outpro">
            <h1>Portfoilo information</h1>
            <p>Help us by answering quistions to get you started</p>
            <form>
                <div className="left">
                    <label>I'm looking for a</label>
                    <select onChange={(event) => setX(event.target.value)}>
                        <option value="A" >Mentee</option>
                        <option value="B" >Mentor</option>
                    </select>
                    <label>My designation is</label>
                    <select>
                        <option>Computer Science</option>
                        <option>Engineering</option>
                        <option>Education</option>
                    </select>
                    <input type="text" placeholder="Expertise" />
                </div>
                <div className="right">
                    {
                        (x==="A")?(<Prof1/>):(<Prof2/>)
                    }
                </div>
                <div className="divend">
                    <div className="file">
                        <button>Upload resume</button>
                        <input type="file" />
                    </div>
                    <p className="pend"> uploading your resume is not a must, put it helps those who are looking for specific qualifications  </p>
                </div>
                <input type="submit" />
            </form>
            
        </div>
    )
}
export default Profile;