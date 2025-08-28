import { use, useState } from "react";
import LoginForm from "./LoginForm";
import Auth from "./Auth";
import AuthButtons from "../back/AuthButtons";
import { useAuth } from "../back/AuthContext";

export default function Navbar(props) {
    const {user} = useAuth();

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="container-md">
                <a className="navbar-brand ">{props.title}</a>
                {user? (
                    <div>
                        <ul>
                            <li><a href="#">Favorite</a></li>
                        </ul>

                    </div>

                ): (
                    <div></div>

                )}
                <AuthButtons></AuthButtons>
                {/* <Auth onLogin={props.onLogin}></Auth> */}

               
                 {/* <button className="login-button" onClick={props.onLogin}>LOGIN</button>
                 <button className="logout-button" onClick={props.onLogout}>LOGOUT</button> */}



            
            </div>

        </nav>
     
        </>
    )

}