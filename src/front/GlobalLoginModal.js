import React from "react";
import {useAuth} from '../back/AuthContext'
import LoginForm from "./LoginForm";
import Login from "../back/Login";

export default function GlobalLoginModal(){
    const {showLogin, closeLoginForm} = useAuth();

    if(!showLogin) return null;

    return(
        <>
            <div className="overlay" onClick={showLogin}>
                <LoginForm onClose={closeLoginForm} onAuth={Login}></LoginForm>

            </div> */
        </>
    )
}