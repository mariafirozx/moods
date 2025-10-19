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

            <nav className="navbar  sticky-top mb-2">
                <div className="container-md mb-2">
                    <Link to='/' className="navbar-brand fw-bold text-dark">{props.title}</Link>
                   
                {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> */}
                    <AuthButtons>
                        <div>
                            <Outlet/>
                        </div>
                    </AuthButtons>
                {/* </div> */}
                    {/* <button
                    className="navbar-toggler"
                    type="buton"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="toggle nav"

                    >
                        <span className="navbar-toggler-icon"></span>
                        
                    </button> */}
                    
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