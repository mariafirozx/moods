import React from "react";
import { supabase } from "../back/Supbase";
import { useState, useEffect } from "react";
import Login from "../back/Login";
import Logout from "../back/Logout";


export default function Auth({onLogin}){

   const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //compenet mount -> check auth state ; if session or not
    useEffect(() => {
        const checkAuth = async ()=>{
            const {data: {session}} = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };

        checkAuth();

        //listen for auth change
        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session)=>{
            setUser(session?.user?? null);
        });

        return () => subscription.unsubscribe();
    }, []);


    // const handleLogin = async () =>{
    //     Login();

    // }

    const handleLogout = async ()=>{
       await supabase.auth.signOut();

        setUser(null); //update UI
    }

    return(
        <>
        {user? (
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
        ): (
            <button className="login-button" onClick={onLogin}>LOGIN</button>

        )}
        
        </>
    )
}