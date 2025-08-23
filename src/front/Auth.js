import React from "react";
import { supabase } from "../back/Supbase";
import { useState, useEffect } from "react";

import { data } from "react-router";
import { useNavigate } from "react-router";


export default function Auth({onLogin}){

   const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //compenet mount -> check auth state ; if session or not

    async function UserSession() {
        useEffect(() => {
             const checkAuth = async ()=>{
                const {data: {session}} = await supabase.auth.getSession();
                setUser(session?.user ?? null);
                setLoading(false);
                // console.log(session.user.user_metadata.full_name);
                
            };
    
            checkAuth();
    
            //listen for auth change
            const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session)=>{
                setUser(session?.user?? null);
            });
    
            return () => subscription.unsubscribe();
        }, []);

        
    }

    UserSession();


    // const handleLogin = async () =>{
    //     Login();

    // }

    const handleLogout = async ()=>{
       await supabase.auth.signOut();
        
        setUser(null); //update UI
        // location.reload();
        navigate('/');
        window.location.reload();
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