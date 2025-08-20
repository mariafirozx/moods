import { use, useState } from "react";
import LoginForm from "./LoginForm";


export default function Navbar(props) {
    

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="container-md">
                <a className="navbar-brand ">{props.title}</a>
                 <button className="login-button" onClick={props.onLogin}>LOGIN</button>
                 <button className="logout-button" onClick={props.onLogout}>LOGOUT</button>



            
            </div>

        </nav>
     
        </>
    )

}