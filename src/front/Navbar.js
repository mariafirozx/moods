import { use, useState } from "react";
import LoginForm from "./LoginForm";
import Auth from "./Auth";
import AuthButtons from "../back/AuthButtons";

export default function Navbar(props) {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="container-md">
                <a className="navbar-brand ">{props.title}</a>
                {/* <Auth onLogin={props.onLogin}></Auth> */}
                <AuthButtons></AuthButtons>

                 {/* <button className="login-button" onClick={props.onLogin}>LOGIN</button>
                 <button className="logout-button" onClick={props.onLogout}>LOGOUT</button> */}



            
            </div>

        </nav>
     
        </>
    )

}