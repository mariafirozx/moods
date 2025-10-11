import { use, useState } from "react";
// import LoginForm from "./LoginForm";
import Auth from "./Auth";
import AuthButtons from "../back/AuthButtons";
import { useAuth } from "../back/AuthContext";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(props) {
    const topic = ['Favorite'];
    const {user, handleLogout} = useAuth();

    return(
        <>

            <nav className="navbar sticky-top mb-2">
                <div className="container-md mb-2">
                    <Link to='/' className="navbar-brand ">{props.title}</Link>
                    {/* {user? (
                        <div>
                            <ul>
                                <li><a href="#">Favorite</a></li>
                            </ul>

                        </div>

                    ): (
                        <div></div>

                    )} */}
                    <AuthButtons>
                        <div>
                            <Outlet/>
                        </div>
                    </AuthButtons>
                    {/* <Auth onLogin={props.onLogin}></Auth> */}

                
                    {/* <button className="login-button" onClick={props.onLogin}>LOGIN</button>
                    <button className="logout-button" onClick={props.onLogout}>LOGOUT</button> */}



                
                </div>

            </nav>
                         {user? (

                            <div className="btnlog position-absolute top-0 end-0 pe-0 pt-1">
                                
                                <button className="logout-button" onClick={handleLogout}>LOGOUT</button> 
                            </div>

                        ):(
                            <div></div>
                        )}



        
     
        </>
    )

}