import React, {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "./Supbase";
import Login from "./Login";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(()=>{
        const checkAuth = async()=>{
            const {data: {session}} = await supabase.auth.getSession();
            setUser(session?.user?? null);
            setLoading(false);
        };
        checkAuth();

        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session)=>{
            setUser(session?.user?? null);
        });

        return()=> subscription.unsubscribe();
    },[]);

    const handleLogin = async ()=>{

        await Login();

    }

    const handleLogout = async ()=>{
        await supabase.auth.signOut();
        setUser(null);
    }

    const handleFaveIcon = () =>{
        if(!user){
            setShowLogin(true);
            return false; //allow fav action
        }
        return true; //prevent fav action
    };
    const closeLoginForm = () =>{
        setShowLogin(false);
    };

    return(
        <AuthContext.Provider value={{
            user,
            loading,
            showLogin,
            handleLogin,
            handleLogout,
            handleFaveIcon,
            closeLoginForm,
            setShowLogin

        }}>

        {children}
        </AuthContext.Provider>
    )
}