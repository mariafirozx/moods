import React from "react";
import { supabase } from "./Supbase";
import { useAuth } from "./AuthContext";
import MovieList from "../front/MovieList";
import { useState, useEffect } from "react";
import Popup from "../front/Popup";

export default function FavPage() {
    const {user} = useAuth();
    const [fav, setFav] = useState([]);
    const [deleteID, setDeleteID] = useState(null);
    const [popup, setPopup] = useState(false);
    const [popupActive, setPopupActive] = useState(false);
    
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
                //remove dup fav movieID
            const unique = [];
            const prevFav = new Set();
            for(const movie of data){
                if(!prevFav.has(movie.movieID)){
                    unique.push(movie);
                    prevFav.add(movie.movieID);
                }
            }
            setFav(unique);
            console.log(data);

        }

        fetchFavMovie();

    }, [user])

    
    //delete logic

    const handleDeleteFav = async(id)=>{
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

    if (!user) {
    return <h2 className="bottomText lead text-center fs-4">Please login to save your favs!</h2>;
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
                onDelete={() => handleDeleteFav(f.id)}
            
            ></MovieList>
        ))}

        <div>
                    {popup && ( <Popup active={popupActive} tagline={"Removed from favorites"}></Popup>
        
                    )}
        </div>
        
                
    </div>
    </>
  )

    
}