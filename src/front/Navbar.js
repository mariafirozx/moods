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
            <nav className="navbar navbar-expand-lg sticky-top shadow-sm mb-2">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fw-bold text-dark">{props.title}</Link>
                   

                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle nav">
                        <span className="navbar-toggler-icon"></span>
                   </button>
                {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> */}
                    
                    <AuthButtons>
                        <div>
                            <Outlet/>
                        </div>
                    </AuthButtons>
                    
                </div>

            </nav>
                        
        </>
    )

}