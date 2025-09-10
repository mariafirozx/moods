import React from "react";
import { supabase } from "./Supbase";
import { useAuth } from "./AuthContext";
import MovieList from "../front/MovieList";
import { useState, useEffect } from "react";

export default function FavPage() {
    const {user} = useAuth();
    const [fav, setFav] = useState([]);
    
    //fetch from db
    useEffect(()=>{
        if(!user) return; //forgot this... 
        const fetchFavMovie = async ()=>{
            // const userID = await user.id;
            const {data, error} = await supabase
                .from('favMovies')
                .select('id, movieID , movieTitle , releaseDate, poster')
                .eq('user',user.id)

            if(error) alert('!!error fetching fav')
            
            setFav(data);
            console.log(data);

        }

        fetchFavMovie();

    }, [user])

    if (!user) {
    return <h2 className="title lead text-center fs-4">Please login to save your favs!</h2>;
  }

  if (fav.length === 0) {
    return <p className="bottomText h5 mt-10 text-center">Your liked movies will show up here...</p>;
  }

  return(
    <>
    <div className="fav-grid mt-1">
        {fav.map((f)=>(
            <MovieList
                key={f.id}
                movieID={f.movieID}
                movieTitle={f.movieTitle}
                releaseDate={f.releaseDate}
                poster={f.poster}
                fav={true}
            
            ></MovieList>
        ))}
    </div>
    </>
  )

    
}