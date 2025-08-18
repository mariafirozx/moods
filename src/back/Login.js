import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./Supbase";

export default async function Login(){

   const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })

        if(error){
            alert('Google SignIn failed...')
        }
   


    // return(
    //     <>
    //         <div>Redirecting to Google login page....</div>
    //     </>
    // )



    // return(
    //     <>
        
    //     </>
    // )
}