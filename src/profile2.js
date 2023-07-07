import React from "react";
function Prof2 (){
    return(
        <form className="prof2">
            <div className="out">
                <label for="che">Available for hiring </label>
                <input type="checkbox" id="che"/>
            </div>
            <input type="text" placeholder="Skills" className="inp1" />
            <input type="text" placeholder="Location" className="inp2" />
        </form>
    )
}
export default Prof2;