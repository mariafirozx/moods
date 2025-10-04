import React from "react";
import { supabase } from "./Supbase";

export default async function DeleteFav(id, setFav, setDeleteID, setPopup, setPopupActive){
    
     await supabase
        .from('favMovies')
        .delete()
        .eq('id',id)

        //check the deleted one, by filtering the prev fav list
        setFav(prev=> prev.filter(f=> f.id!== id))
        setDeleteID(null)

        setPopup(true);
        setPopupActive(true);
        setTimeout(()=> setPopupActive(false),2500);
        setTimeout(()=> setPopup(false), 3000);

}