    import React from 'react'
    import {BrowserRouter as Outer,Routes,Route} from "react-router-dom"
    import Login from "./login.js"
    import Signup  from './signup.js'
    import Profile from './profile.js'
    import Header from "./header.js"
    import "./App.css"
    import "./all.min.css"

    function App() {
        
    return(
        <Outer>
            <Header />
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/profile" element={<Profile/>} >
                </Route>
            </Routes>
        </Outer>
    )

}

    export default App;
