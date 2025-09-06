import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "./Supbase";
import {MovieList} from "../front/MovieList"; 

export default async function Favorite({user, movieID, movieTitle, releaseDate, poster, fav}){
    //create fav db
    
    const {data, error} = await supabase
        .from('favMovies')
        .insert({
            movieID: movieID,
            movieTitle: movieTitle,
            releaseDate: releaseDate,
            poster: poster

        })
        if(error){
            alert('error adding fav in db!!')
        }

        console.log(data);


    // return(
    //     <>
    //         <div className="FavPage">
    //             <h1>Your Favorites</h1>
    //         </div>
    //     </>
    // )
}