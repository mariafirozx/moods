import React from "react";
import { supabase } from "./Supbase";
import { useAuth } from "./AuthContext";
import MovieList from "../front/MovieList";
import { useState, useEffect } from "react";

export default async function FavPage() {
    const {user} = useAuth();
    const [fav, setFav] = useState([]);
    
    //fetch from db
    useEffect(()=>{
        const fetchFavMovie = async ()=>{
            const {data, error} = await supabase
                .from('favMovies')
                .select('id','movieID', 'movieTitle', 'releaseDate', 'poster')
                .eq('user',user.id)

            if(error) alert('!!error fetching fav')
            
            setFav(data);

        }

        fetchFavMovie();

    }, [user])

    if (!user) {
    return <p className="text-center">Please log in to see your favorites.</p>;
  }

  if (favorites.length === 0) {
    return <p className="text-center">You got no favorites yet...</p>;
  }

  return(
    <>
    <div className="fav-grid d-flex flex-wrap justify-content-center gap-4 mt-4">
        {fav.map((f)=>{
            <MovieList
                key={f.id}
                movieID={f.movieID}
                movieTitle={f.movieTitle}
                releaseDate={f.releaseDate}
                poster={f.poster}
                fav={true}
            
            ></MovieList>
        })}
    </div>
    </>
  )

    
}