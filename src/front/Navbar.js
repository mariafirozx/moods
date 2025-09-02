import { use, useState } from "react";
import LoginForm from "./LoginForm";
import Auth from "./Auth";
import AuthButtons from "../back/AuthButtons";
import { useAuth } from "../back/AuthContext";

export default function Navbar(props) {
    const {user, handleLogout} = useAuth();

    return(
        <>

            <nav className="navbar sticky-top mb-2">
                <div className="container-md mb-5">
                    <a className="navbar-brand ">{props.title}</a>
                    {/* {user? (
                        <div>
                            <ul>
                                <li><a href="#">Favorite</a></li>
                            </ul>

                        </div>

                    ): (
                        <div></div>

                    )} */}
                    <AuthButtons></AuthButtons>
                    {/* <Auth onLogin={props.onLogin}></Auth> */}

                
                    {/* <button className="login-button" onClick={props.onLogin}>LOGIN</button>
                    <button className="logout-button" onClick={props.onLogout}>LOGOUT</button> */}



                
                </div>

            </nav>
                         {user? (

                            <div className="btnlog position-absolute top-0 end-0 pe-3 pt-2">
                                
                                <button className="logout-button" onClick={handleLogout}>LOGOUT</button> 
                            </div>

                        ):(
                            <div></div>
                        )}



        
     
        </>
    )

}