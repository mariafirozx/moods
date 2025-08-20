import React from "react";
import { supabase } from "./Supbase";

export default async function Logout(){
    const {data, error} = await supabase.auth.signOut();

    if(error){
        alert('error siging out')
    }

}