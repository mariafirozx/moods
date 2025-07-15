import React, { use } from "react";
import { useState } from "react";

import Movie from "../back/Movie";
import Genre from "../back/Genre";

export default function MovieGenreView({mood}){
    const [genreId, setGenreId] = useState(null);

    return(
        <>
        <div>
        <Genre mood={mood} onGenreId={setGenreId}></Genre>

        </div>
        {/* <div class="spinner-grow" role="status">
                <span class="sr-only"> </span>
        </div> */}

        {genreId && genreId.map(id => (
            <Movie key={id} genreId={[id]}></Movie>

        ))}


        
        </>
    )



    

}